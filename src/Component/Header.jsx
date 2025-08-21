// Header.jsx
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-rose-800 shadow-md z-50">
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-8 py-2">
        
        {/* Left Logo */}
        <div className="flex-shrink-0 min-w-[40px] sm:min-w-[56px] md:min-w-[64px]">
          <img
            src="/Image/l1.png"
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
            alt="Logo"
          />
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center px-2 overflow-hidden">
          <p className="text-white font-extrabold text-base sm:text-xl md:text-3xl lg:text-4xl tracking-widest drop-shadow-lg uppercase leading-tight truncate">
            THE INSIGHT INDIA
          </p>
          <span className="block text-[10px] sm:text-xs md:text-sm lg:text-lg italic font-light text-yellow-400 tracking-wide normal-case truncate">
            Awakening Minds
          </span>
        </div>

        {/* Right Logo */}
        <div className="flex-shrink-0 min-w-[40px] sm:min-w-[56px] md:min-w-[64px]">
          <img
            src="/Image/l3.jpg"
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
            alt="Logo3"
          />
        </div>
      </div>
    </header>
  );
}