"use server";

import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// GET ALL PRODUCTS
export const getProducts = async () => {
  const col = await dbConnect(collections.PRODUCTS);

  const products = await col.find({ featured: false }).toArray();

  return products.map((p) => ({
    ...p,
    _id: p._id.toString(), 
  }));
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (id) => {
  if (!id || id.length !== 24) return null;

  const col = await dbConnect(collections.PRODUCTS);

  const product = await col.findOne({
    _id: new ObjectId(id),
  });

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(), 
  };
};

// GET FEATURED PRODUCTS
export const getFeaturedProducts = async () => {
  const col = await dbConnect(collections.PRODUCTS);

  const products = await col
    .find({ featured: true })
    .toArray();

  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
};