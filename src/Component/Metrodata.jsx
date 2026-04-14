import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const metroData = [
    {
        slug: "delhi-metro",
        title: "Delhi Metro",
        logo: "/Image/delhi-metro.png",
        map: "/Image/delhi-metro-map.pdf",
        type: "pdf",
    },
    {
        slug: "pune-metro",
        title: "Pune Metro",
        logo: "/Image/pune-metro.png",
        map: "/Image/pune-metro-map.pdf",
        type: "pdf",
    },
    {
        slug: "jaipur-metro",
        title: "Jaipur Metro",
        logo: "/Image/jaipur-metro.png",
        map: "/Image/jaipur-metro-map.png",
        type: "image",
    },
    {
        slug: "mumbai-metro",
        title: "Mumbai Metro",
        logo: "/Image/mumbai-metro.png",
        map: "/Image/mumbai-metro-map.png",
        type: "image",
    },
    {
        slug: "patna-metro",
        title: "Patna Metro",
        logo: "/Image/patna-metro.png",
        map: "/Image/patna-metro-map.png",
        type: "image",
    },
    {
        slug: "uttar-pradesh-metro",
        title: "Uttar Pradesh Metro",
        logo: "/Image/uttar-pradesh-metro.png",
        map: "/Image/uttar-pradesh-metro-map.png",
        type: "image",
    },
];

export default function MetroData() {
    const { slug } = useParams();
    const [isFullScreen, setIsFullScreen] = useState(false);

    // ✅ LIST VIEW
    if (!slug) {
        return (
            <div className="bg-black min-h-screen pt-24 pb-10 px-4">

                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
                    🚇 Metro Routes
                </h2>

                <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">

                    {metroData.map((metro) => (
                        <Link to={`/metro/${metro.slug}`} key={metro.slug}>
                            <div className="flex flex-col items-center group">

                                {/* OUTER CIRCLE */}
                                <div className="
                                    w-[95px] h-[95px]
                                    rounded-full
                                    bg-gradient-to-br from-gray-100 to-gray-300
                                    shadow-md
                                    flex items-center justify-center
                                    transition duration-300
                                    group-hover:scale-110 group-hover:shadow-xl
                                ">

                                    {/* INNER FIX (LOGO ALIGNMENT) */}
                                    <div className="w-[70%] h-[70%] bg-white rounded-full flex items-center justify-center p-2">

                                        <img
                                            src={metro.logo}
                                            alt={metro.title}
                                            className={`
                                                max-w-full max-h-full object-contain
                                                ${metro.slug === "mumbai-metro" ? "scale-90" : ""}
                                                ${metro.slug === "patna-metro" ? "scale-95" : ""}
                                            `}
                                        />

                                    </div>

                                </div>

                                <p className="mt-3 text-xs text-white text-center font-medium">
                                    {metro.title}
                                </p>

                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        );
    }

    // ✅ DETAIL VIEW
    const metro = metroData.find((m) => m.slug === slug);

    if (!metro) {
        return <h2 className="text-center mt-10">Metro not found</h2>;
    }

    return (
        <div className="bg-black min-h-screen pt-24 flex flex-col items-center px-4 pb-10">

            {/* BACK */}
            <Link to="/metro" className="text-white mb-4 text-sm underline">
                ← Back
            </Link>

            {/* CARD */}
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* MAP */}
                <div
                    className="w-full h-[60vh] sm:h-[70vh] bg-gray-200 cursor-pointer relative group"
                    onClick={() => setIsFullScreen(true)}
                >

                    {metro.type === "pdf" ? (
                        <iframe
                            src={metro.map}
                            title={metro.title}
                            className="w-full h-full border-0"
                        />
                    ) : (
                        <img
                            src={metro.map}
                            alt={metro.title}
                            className="w-full h-full object-contain"
                        />
                    )}

                    {/* HOVER TEXT */}
                    <div className="
                        absolute inset-0
                        bg-black/0 group-hover:bg-black/30
                        flex items-center justify-center
                        transition
                    ">
                        <span className="
                            text-white text-sm sm:text-lg font-semibold
                            opacity-0 group-hover:opacity-100
                            bg-black/60 px-4 py-2 rounded-lg
                            transition
                        ">
                            View Fullscreen
                        </span>
                    </div>

                </div>

                {/* TITLE */}
                <div className="p-4 text-center bg-gray-100">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {metro.title} Route Map
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                        Tap map to explore full screen
                    </p>
                </div>

            </div>

            {/* ✅ FULLSCREEN */}
            {isFullScreen && (
                <div className="
                    fixed inset-0 z-50
                    bg-black/90 backdrop-blur-sm
                    flex flex-col
                ">

                    {/* HEADER */}
                    <div className="flex justify-between items-center p-4 text-white border-b border-gray-700">
                        <h2 className="text-lg font-semibold">{metro.title}</h2>

                        <button
                            onClick={() => setIsFullScreen(false)}
                            className="text-2xl hover:text-gray-300"
                        >
                            ✕
                        </button>
                    </div>

                    {/* FULL MAP */}
                    <div className="flex-1">
                        {metro.type === "pdf" ? (
                            <iframe
                                src={metro.map}
                                title={metro.title}
                                className="w-full h-full border-0"
                            />
                        ) : (
                            <img
                                src={metro.map}
                                alt={metro.title}
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>

                </div>
            )}

        </div>
    );
}