"use client";

import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Rahman",
      role: "Mother of 2",
      location: "Dhaka",
      image: "/assets/testimonial1.jpg",
      rating: 5,
      text: "Hero Kidz has been a game-changer for my children! The educational toys are not only fun but also help in their cognitive development. My kids love playing with them every day.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Md. Karim Hossain",
      role: "Father",
      location: "Chittagong",
      image: "/assets/testimonial2.jpg",
      rating: 5,
      text: "Excellent quality toys at affordable prices. The delivery was super fast and the customer service is outstanding. Highly recommended for all parents!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Tahmina Akter",
      role: "Teacher",
      location: "Sylhet",
      image: "/assets/testimonial3.jpg",
      rating: 5,
      text: "As a teacher, I appreciate the educational value of these toys. My students have shown remarkable improvement in their learning skills. Thank you Hero Kidz!",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Rafiqul Islam",
      role: "Grandfather",
      location: "Rajshahi",
      image: "/assets/testimonial4.jpg",
      rating: 4,
      text: "Great collection of toys for kids of all ages. The safety standards are impressive. My grandchildren are absolutely delighted with their new toys.",
      date: "5 days ago"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Parents Say <span className="text-primary">About Us</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the parents who trust Hero Kidz
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-primary/30 mb-4" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    } text-xl`}
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 h-2 bg-primary rounded-full"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">500+ Happy Parents</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">4.9 Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Verified Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;