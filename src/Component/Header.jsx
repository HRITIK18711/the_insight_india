// Header.jsx
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-34 bg-rose-800 flex items-center justify-between px-6 shadow-md z-50 ">
      {/* Left Logo */}
      <div className="flex items-center">
        <div className="w-30 h-35 md:w-40 md:h-40">
          <img
            src="/Image/l1.png"
            className="w-full h-full rounded-full object-cover"
            alt="Logo"
          />
        </div> 
      </div>

      {/* Center Text */}
      <p className="absolute left-1/2 -translate-x-1/2 text-white font-extrabold text-5xl md:text-6xl tracking-widest drop-shadow-lg uppercase text-center">
        THE INSIGHT INDIA
        <span className="block text-xl md:text-2xl italic font-light text-yellow-400 tracking-wide normal-case">
          Awakening Minds
        </span>
      </p>


      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
      
        <div className="w-14 h-14 md:w-30 md:h-30">
          <img
            src="/Image/l3.jpg"
            className="w-full h-full rounded-full object-cover"
            alt="Logo3"
          />
        </div>
      </div>
    </header>
  );
}