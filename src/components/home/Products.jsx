import { getProducts } from "@/actions/server/product";
import ProductCard from "../cards/ProductCard";
import Link from "next/link";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Our Products</h2>

        <Link
          href="/products"
          className="text-primary font-medium hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
