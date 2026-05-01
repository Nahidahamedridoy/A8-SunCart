import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">

            <div className="text-center max-w-lg">

                {/* 404 Text */}
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-semibold mt-4 text-gray-800">
                    Oops! Page not found 😕
                </h2>

                {/* Description */}
                <p className="text-gray-600 mt-3">
                    The page you're looking for doesn't exist or has been moved.
                    Don't worry, you can go back to the homepage.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                        
                        Back to Home
                    </button>
                </Link>

                {/* Decorative Blur Circle */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

            </div>
        </div>
    );
}