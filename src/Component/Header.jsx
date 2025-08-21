// Header.jsx
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-rose-800 shadow-md z-50">
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-8 py-2">
        
        {/* Left Logo */}
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <img
            src="/Image/l1.png"
            className="w-full h-full rounded-full object-cover"
            alt="Logo"
          />
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center px-2">
          <p className="text-white font-extrabold text-lg sm:text-2xl md:text-4xl lg:text-5xl tracking-widest drop-shadow-lg uppercase leading-tight whitespace-nowrap">
            THE INSIGHT INDIA
          </p>
          <span className="block text-xs sm:text-sm md:text-lg italic font-light text-yellow-400 tracking-wide normal-case">
            Awakening Minds
          </span>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
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