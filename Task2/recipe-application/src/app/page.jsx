import React from "react";
import Image from "next/image"; // For optimized image loading (if using Next.js)
import Navbar from "@/components/Navbar";

const FullScreenFoodPage = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center overflow-hidden relative"
    style={{backgroundImage: "url('https://wallpapers.com/images/hd/plain-white-background-3qzwpiavktxg11pr.jpg')", backgroundSize: "cover"}}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-green-100 rounded-full"></div>
        <div className="absolute bottom-0 -right-16 w-72 h-72 bg-green-200 rounded-full"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full p-10">
        {/* Navigation */}
       <Navbar />

        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-green-600 font-semibold uppercase text-sm">
            Chef&apos;s Special
          </h1>
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Freshness in every bite
          </h2>
          <p className="text-gray-500 text-lg">
            Healthy Sashimi Tuna Bites with Sesame-grade Tuna, 10 calories, and
            13g protein.
          </p>
          <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700">
            Download Recipe
          </button>
        </div>

        {/* Right Section */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative">
            <Image
              src="/recipe5.png" // Replace with the actual image path
              alt="Food Bowl"
              width={460}
              height={450}
              className="rounded-full shadow-lg object-cover"
            />
            <div className="absolute -top-6 -right-5">
              <Image
                src="/recipe3.jpg" // Replace with the actual image path
                alt="Berry"
                width={50}
                height={50}
                className="rounded-full shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenFoodPage;
