import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// ➕ ADD TO CART
export async function POST(req) {
  try {
    const { product, email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const cartCollection = await dbConnect(collections.CART);

    const exists = await cartCollection.findOne({
      productId: product._id,
      email,
    });

    if (exists) {
      await cartCollection.updateOne(
        { _id: exists._id },
        { $inc: { quantity: 1 } }
      );

      return NextResponse.json({
        success: true,
        message: "Quantity updated",
      });
    }

    await cartCollection.insertOne({
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      email,
      quantity: 1,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Added to cart",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// ❌ REMOVE ITEM (FIXED)
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    const cartCollection = await dbConnect(collections.CART);

    await cartCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      success: true,
      message: "Item removed",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}