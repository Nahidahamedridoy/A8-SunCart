'use client';
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-100 via-yellow-100 to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Summer Sale ☀️ <br />
            <span className="text-orange-500">Up to 50% OFF</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover the hottest summer essentials – sunglasses, outfits,
            skincare & more. Stay cool and stylish this season!
          </p>

          <div className="mt-6 flex gap-4">
            <Button color="warning" variant="solid">
              Shop Now
            </Button>
            <Button variant="bordered">
              Explore
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/3x3QzSGq/summer-banner.png"
            alt="Summer Banner"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;