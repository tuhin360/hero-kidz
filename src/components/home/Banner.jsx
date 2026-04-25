import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="min-h-[calc(100vh-500px)] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
            <h2
              className={`${fontBangla.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight lg:leading-[1.2]`}
            >
              বিনোদন আর শিক্ষার{" "}
              <span className="text-primary block sm:inline-block">
                সেরা সংযোগ ৫০% ছাড়ে
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              Buy the best toys for your kids at Hero Kidz and get 50% off on
              all items. Limited time offer!
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="btn btn-primary btn-md sm:btn-lg px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </div>

            {/* Stats Section - Optional but adds professionalism */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-6 sm:pt-8">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  1000+
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Happy Kids</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  50+
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Toy Categories
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  30%
                </p>
                <p className="text-xs sm:text-sm text-gray-500">Discount</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
              <div className="relative aspect-square w-full">
                <Image
                  src="/assets/hero.png"
                  alt="Hero Kidz - Best toys for your kids"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
