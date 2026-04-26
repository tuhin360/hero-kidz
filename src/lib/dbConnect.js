// const uri = process.env.MONGODB_URI;
// const dbname = process.env.DBNAME;

// export const collections = {
//   PRODUCTS: "products",
//   CART: "cart",
// };

// const { MongoClient, ServerApiVersion } = require("mongodb");
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export const dbConnect = (cname) => {
//   return client.db(dbname).collection(cname);
// };
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

export const collections = {
  PRODUCTS: "products",
  CART: "cart",
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const dbConnect = async (cname) => {
  const client = await clientPromise;
  return client.db(dbname).collection(cname);
};