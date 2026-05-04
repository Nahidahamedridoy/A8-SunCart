const tips = [
    {
        id: 1,
        title: "Stay Hydrated 💧",
        desc: "Drink plenty of water to keep your body cool and hydrated during hot summer days.",
    },
    {
        id: 2,
        title: "Use Sunscreen ☀️",
        desc: "Apply SPF 30+ sunscreen before going outside to protect your skin from harmful UV rays.",
    },
    {
        id: 3,
        title: "Wear Light Clothes 👕",
        desc: "Choose breathable cotton or linen clothes to stay comfortable in the heat.",
    },
    {
        id: 4,
        title: "Avoid Midday Sun 🌤️",
        desc: "Try to stay indoors between 12 PM - 3 PM when the sun is strongest.",
    },
    {
        id: 5,
        title: "Eat Fresh Fruits 🍉",
        desc: "Consume fruits like watermelon and oranges to stay fresh and energized.",
    },
    {
        id: 6,
        title: "Take Cool Showers 🚿",
        desc: "Cool showers help reduce body temperature and refresh your mood.",
    },
];

const SummerTips = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            <h2 className="text-3xl font-bold text-center mb-8">
                🌞 Summer Care Tips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition duration-300"
                    >
                        <h3 className="text-lg font-semibold mb-2 text-orange-500">
                            {tip.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {tip.desc}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SummerTips;