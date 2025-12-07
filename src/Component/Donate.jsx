// Donate.jsx
import React, { useState } from "react";

export default function Donate() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-rose-100 to-rose-300 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 text-center">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-800 mb-4">
          Support Our Cause ❤️
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Your contribution helps us continue our mission of{" "}
          <span className="font-semibold text-rose-600">Awakening Minds</span>.
          Every donation, big or small, makes a difference!
        </p>

        {/* Buttons */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
          >
            Donate
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6">
          100% of your donation goes directly towards our programs.

        </p>
        <p className="text-sm text-black mt-6">
          <span className="text-red-800">Note: </span>After Payment share the SS to our mail id: @theinsight22@gmail.com
        </p>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 relative w-96 max-w-full">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* QR Image */}
            <h2 className="text-xl font-bold mb-4 text-rose-700">Scan to Pay</h2>
            
            <p className="mt-3 text-gray-600 text-sm text-center">
              Use UPI / Scanner to complete your donation
            </p>
          </div>
        </div>
      )}
    </div>
  );
}