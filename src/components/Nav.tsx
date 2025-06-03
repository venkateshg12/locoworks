import { useEffect, useState } from "react";
import HamburgerMenu, { Logo, navlinks } from "../constants";

const Nav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleScreenLock = () => {
    setOpenNav((prev) => !prev);
  };

  // Handle scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = openNav ? 'hidden' : '';
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [openNav]);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="w-full  backdrop-blur-sm bg-opacity-95 border-b border-amber-400">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 md:py-6 lg:py-7">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo className="w-[25vw] sm:w-[20vw] md:w-[7rem] lg:w-[6rem] xl:w-[7vw] max-w-[120px]" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-6 xl:gap-8 2xl:gap-[1.4vw]">
              <nav className="font-montreal flex items-center gap-5 lg:gap-6 xl:gap-8 2xl:gap-[1.4vw] 
                             text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[1vw]">
                {navlinks.map((item, index) => (
                  <a 
                    href="#" 
                    key={index}
                    className="hover:text-gray-700 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex-shrink-0" onClick={toggleScreenLock}>
              <HamburgerMenu 
                className={`transition-all duration-300 cursor-pointer ${
                  openNav ? 'text-white' : 'text-black'
                }`} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {openNav && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-amber-300" 
            onClick={toggleScreenLock}
          />
          
          {/* Mobile Navigation Menu */}
          <div className="relative z-50 flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
              {navlinks.map((item, index) => (
                <a 
                  href="#" 
                  key={index}
                  className="font-neue-montreal text-2xl sm:text-3xl md:text-4xl font-medium 
                           text-black hover:text-gray-700 transition-colors duration-200
                           animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                  }}
                  onClick={toggleScreenLock}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Close button or additional content can go here */}
            <button 
              onClick={toggleScreenLock}
              className="absolute top-6 right-6 text-black hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Nav;