import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Zainav Beauty",
    logo: "https://i.pinimg.com/736x/29/49/39/294939ab2ab940c61192946d9d15d829.jpg",
  },
  {
    id: 2,
    name: "SkinBeauty",
    logo: "https://i.pinimg.com/736x/3c/65/d2/3c65d243121556ab8bbff29dc1e716ac.jpg",
  },
  {
    id: 3,
    name: "SkinGuard",
    logo: "https://i.pinimg.com/1200x/8e/7c/9d/8e7c9df8cad828e48feb78ee408c6783.jpg",
  },
  {
    id: 4,
    name: "SunShade",
    logo: "https://i.pinimg.com/736x/1f/51/65/1f5165b8621c116936c9f3ab888ef13b.jpg",
  },
];

const TopBrands = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">
        🏷️ Top Brands
      </h2>

      {/* Brand Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={80}
              className="object-contain"
            />
            <h3 className="mt-3 font-semibold text-gray-700">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TopBrands;