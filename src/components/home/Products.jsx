import { getProducts } from "@/actions/server/product";
import ProductCard from "../cards/ProductCard";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
