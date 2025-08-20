// Header.jsx
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-rose-800 shadow-md z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        
        {/* Left Logo */}
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
          <img
            src="/Image/l1.png"
            className="w-full h-full rounded-full object-cover"
            alt="Logo"
          />
        </div>

        {/* Center Text */}
        <div className="text-center flex-1 px-2">
          <p className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-widest drop-shadow-lg uppercase leading-tight">
            THE INSIGHT INDIA
          </p>
          <span className="block text-sm sm:text-base md:text-xl italic font-light text-yellow-400 tracking-wide normal-case">
            Awakening Minds
          </span>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
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