"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-yellow-50 py-16 px-6 md:px-16 mt-5">
      <div className="grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 animate__animated animate__fadeInDown">
            Summer Sale 🔥
          </h1>

          <p className="mt-4 text-gray-600 text-lg animate__animated animate__fadeInLeft animate__delay-1s">
            Up to 50% off on all summer collections. Grab your favorite products now!
          </p>

          <Link href={"/all-carts"}> 
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 animate__animated animate__pulse animate__infinite">
            Shop Now
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="animate__animated animate__zoomIn animate__delay-1s">
            <Image
              src="https://i.pinimg.com/736x/84/2e/de/842ede27e0139d52d769a714d44ec2bc.jpg"
              alt="Summer Banner"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}