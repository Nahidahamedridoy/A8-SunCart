import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeShow = () => {

    const marqueeData = [
        "🕶️ Stylish Sunglasses",
        "👕 Lightweight Summer T-Shirts",
        "👗 Trendy Summer Dresses",
        "🧴 Skincare Essentials",
        "🌞 Sunscreen SPF 50+",
        "🧢 Cool Caps & Hats",
        "🩴 Comfortable Sandals",
        "🏖️ Beach Towels",
        "🏝️ Beach Accessories",
        "💧 Hydration Water Bottles",
        "🧃 Fresh Juice Bottles",
        "🍉 Summer Fruits Collection",
        "🎒 Travel Backpacks",
        "👜 Fashionable Handbags",
        "👟 Breathable Sneakers",
        "🧦 Cotton Socks",
        "🧼 Face Wash & Cleanser",
        "💄 Summer Makeup Kit",
        "🪞 Compact Mirrors",
        "🛍️ Eco Shopping Bags",
        "🌴 Vacation Essentials",
        "🧊 Ice Boxes & Coolers",
        "🍹 Cocktail Glass Sets",
        "🎧 Wireless Earbuds",
        "📱 Phone Accessories",
        "🔋 Power Banks",
        "💡 LED String Lights",
        "🛏️ Summer Bed Sheets",
        "🪟 Window Curtains",
        "🕯️ Scented Candles",
        "🧘 Yoga Mats",
        "🏋️ Fitness Gear",
        "🚴 Outdoor Sports Items",
        "🏊 Swimming Gear",
        "🧴 Body Lotion",
        "🧼 Soap Bars",
        "🌸 Perfumes & Fragrances",
        "🧴 Hair Care Products",
        "🪒 Grooming Kits",
        "🎁 Gift Boxes",
        "📸 Travel Cameras",
        "🕶️ Premium Sunglasses",
        "👚 Casual Summer Tops",
        "👖 Denim Shorts",
        "🩱 Swimwear Collection",
        "🧺 Picnic Baskets",
        "🌤️ Umbrellas",
        "🧊 Cooling Fans",
        "🛶 Adventure Gear"
    ];

    return (
        <div>
            <Marquee speed={50} pauseOnHover>
                <p className="mx-6 mt-5  bg-background-tertiary p-5 text-orange-600 font-medium text-xl leading-loose ">
                    {marqueeData}
                </p>
            </Marquee>
        </div>
    );
};

export default MarqueeShow;