import Banner from "@/components/home/Banner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 space-y-20">
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <FeaturedProducts/>
      </section>
    </div>
  );
}
