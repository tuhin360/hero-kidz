import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function PATCH(req) {
  const { id, type } = await req.json();

  const cartCollection = await dbConnect(collections.CART);

  const item = await cartCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!item) {
    return NextResponse.json(
      { message: "Item not found" },
      { status: 404 }
    );
  }

  let quantity = item.quantity;

  if (type === "increase") quantity += 1;
  if (type === "decrease" && quantity > 1) quantity -= 1;

  await cartCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { quantity } }
  );

  return NextResponse.json({ message: "Quantity updated" });
}