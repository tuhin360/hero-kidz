import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";

export async function POST(req) {
  const { email } = await req.json();

  const cartCollection = await dbConnect(collections.CART);

  const count = await cartCollection.countDocuments({ email });

  return NextResponse.json({ count });
}