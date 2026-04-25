import { getProducts } from "@/actions/server/product";
import ProductList from "../sections/ProductList";
 

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Our Products</h2>

        <a
          href="/products"
          className="text-primary font-medium hover:underline"
        >
          View All →
        </a>
      </div>

      <ProductList initialProducts={products} />
    </div>
  );
};

export default Products;