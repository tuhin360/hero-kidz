import Banner from "@/components/home/Banner";
import ChoseUs from "@/components/home/ChoseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";
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
      <section>
        <ChoseUs/>  
      </section>
      <section>
        <Testimonial/> 
      </section>
    </div>
  );
}
