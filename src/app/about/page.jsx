import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">
          About HeroKidz
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          HeroKidz is your trusted destination for educational toys that inspire
          creativity, learning, and fun for kids of all ages.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="kids learning"
          width={800}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Description */}
      <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
        <p>
          At HeroKidz, we believe that learning should be fun, engaging, and
          meaningful. Our carefully selected collection of toys helps children
          develop essential skills like problem-solving, creativity, and
          critical thinking.
        </p>

        <p>
          From STEM toys to creative play kits, we provide high-quality,
          safe, and child-friendly products that support early childhood
          development. আমাদের লক্ষ্য হলো এমন একটি প্ল্যাটফর্ম তৈরি করা যেখানে
          বাচ্চারা খেলতে খেলতে শিখতে পারে।
        </p>

        <p>
          Whether you're a parent, teacher, or gift shopper — HeroKidz is here
          to make learning joyful and exciting for every child.
        </p>
      </div>

      {/* Optional Extra Section */}
      <div className="grid md:grid-cols-3 gap-6 pt-6">
        <div className="bg-base-100 p-5 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">🎯 Our Mission</h3>
          <p className="text-sm text-gray-500 mt-2">
            Make learning fun and accessible for every child.
          </p>
        </div>

        <div className="bg-base-100 p-5 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">🧠 Learning Focus</h3>
          <p className="text-sm text-gray-500 mt-2">
            Boost creativity, logic, and problem-solving skills.
          </p>
        </div>

        <div className="bg-base-100 p-5 rounded-xl shadow text-center">
          <h3 className="font-semibold text-lg">🛡️ Safety First</h3>
          <p className="text-sm text-gray-500 mt-2">
            All products are child-safe and non-toxic materials.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;