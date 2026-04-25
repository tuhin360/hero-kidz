import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex-1 space-y-4">
        <h2 className={`${fontBangla.className} text-6xl font-bold leading-18`}>আপনার শিশুকে খেলনার <span className="text-primary">জগতে স্বাগতম</span></h2>
        <p className="">Buy the best toys for your kids at Hero Kidz and get 50% off</p>
        <button className="btn btn-primary">Shop Now</button>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/hero.png"}
          alt="Buy the best toys for your kids"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;
