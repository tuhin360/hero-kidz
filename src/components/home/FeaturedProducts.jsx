import { getFeaturedProducts } from "@/actions/server/product";
import ProductCard from "../cards/ProductCard";
import Link from "next/link";

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts();

  //  simple logic (top 8 products)
  const featured = products.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>

        <Link
          href="/products"
          className="text-primary font-medium hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
