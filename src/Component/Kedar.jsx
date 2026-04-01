import React, { useState } from "react";

const Kedar = () => {
  const [people, setPeople] = useState(2);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    date: "",
    budget: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION
  const validate = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Fill all required fields ❌");
      return false;
    }
    if (formData.phone.length < 10) {
      alert("Invalid phone ❌");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbygfUBe8B-vBSUOrAfkszUmkwLIGvIPkCtiGkhBvFahtldFJGQjez_0FlIbieimIkGs/exec", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          people,
        }),
      });

      // ✅ WhatsApp redirect
    //   window.open(
    //     `https://wa.me/91XXXXXXXXXX?text=New Booking - ${formData.name}, ${formData.phone}`,
    //     "_blank"
    //   );

      setSuccess(true);
      setFormData({
        email: "",
        name: "",
        phone: "",
        city: "",
        date: "",
        budget: "",
        requirements: "",
      });

    } catch (err) {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-screen relative text-white">

      {/* BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Image/kedarkantha.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex h-full">

        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center px-16">
          <h1 className="text-6xl font-bold italic mb-4">
            Kedarkantha
          </h1>
          <h2 className="text-3xl font-semibold">
            GOD’S OWN COUNTRY{" "}
            <span className="text-yellow-400">INDEED</span>
          </h2>
        </div>

        {/* FORM */}
        <div className="w-[400px] bg-white text-black rounded-lg shadow-lg p-6 m-10 mt-25">

          <h2 className="text-xl font-semibold text-center mb-4">
            Kedarkantha Tour Packages
          </h2>

          {success && (
            <p className="text-green-600 text-center mb-3">
              ✅ Submitted Successfully
            </p>
          )}

          <div className="space-y-3">

            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full border p-2 rounded" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Contact Number" className="w-full border p-2 rounded" />
            <input name="city" value={formData.city} onChange={handleChange} placeholder="Departure City" className="w-full border p-2 rounded" />
            <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded" />

            {/* PEOPLE */}
            <div className="flex justify-between border p-2 rounded">
              <span>Number Of People</span>
              <div className="flex gap-3">
                <button onClick={() => setPeople(Math.max(1, people - 1))}>-</button>
                <span>{people}</span>
                <button onClick={() => setPeople(people + 1)}>+</button>
              </div>
            </div>

            <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border p-2 rounded">
              <option>Budget Per Person</option>
              <option>₹10k - ₹20k</option>
              <option>₹20k - ₹40k</option>
              <option>₹40k+</option>
            </select>

            <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Your Requirements" className="w-full border p-2 rounded" />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition"
            >
              {loading ? "Submitting..." : "Request Callback →"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Kedar;