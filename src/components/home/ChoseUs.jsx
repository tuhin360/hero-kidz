"use client";

import React, { useEffect, useState } from 'react';
import { 
  FaGem, 
  FaClock, 
  FaGift, 
  FaGlobe,
  FaStar,
  FaLock
} from 'react-icons/fa';

const ChoseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('why-choose-us');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const features = [
    {
      icon: <FaGem />,
      title: "Premium Quality",
      desc: "Highest quality materials",
      stats: "100% Safe"
    },
    {
      icon: <FaClock />,
      title: "Fast Delivery",
      desc: "2-3 day express shipping",
      stats: "Free Shipping"
    },
    {
      icon: <FaGift />,
      title: "Special Offers",
      desc: "Regular discounts & deals",
      stats: "Up to 50% Off"
    },
    {
      icon: <FaGlobe />,
      title: "Nationwide Service",
      desc: "Serving all across Bangladesh",
      stats: "64 Districts"
    },
    {
      icon: <FaStar />,
      title: "Rated 5 Stars",
      desc: "Trusted by parents",
      stats: "5000+ Reviews"
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "Multiple payment options",
      stats: "COD Available"
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Why Hero Kidz
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Hero Kidz <span className="text-primary">Advantage</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of parents trust us for their children's toys
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center group hover:-translate-y-2">
                <div className="bg-gradient-to-r from-primary to-secondary w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {feature.desc}
                </p>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {feature.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoseUs;