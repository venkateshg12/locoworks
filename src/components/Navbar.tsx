import { useEffect, useState } from "react";
import HamburgerMenu, { Logo, navlinks } from "../constants";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleScreenLock = () => {
    setOpenNav((prev) => !prev); // Just toggle
  };

  useEffect(() => {
    document.body.style.overflow = openNav ? 'hidden' : '';
  }, [openNav]);

  return (
    <div >
      <div className="w-full backdrop:blur-sm bg-opacity-95 border-amber-400 border-b">
        <div className=" px-4 md:px-8 lg:px-12  py-5 md:py-6 lg:py-7">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Logo className="md:w-[7rem] w-[25vw]  xl:w-[7vw]" />
            </div>
            <div className=" md:flex  items-center justify-evenly gap-5 xl:gap-[1.4vw]  2xl:text-[1vw] md:text-[1.1rem] hidden ">
              <nav className="font-neue-montreal flex items-center gap-5 lg:gap-6 xl:gap-8 2xl:gap-[1.4vw] font-bold">
                {navlinks.map((item, index) => (
                  <a href=""
                    key={index}
                    className="hover:text-gray-500 transition-colors duration-200 font-medium"
                  >{item}</a>
                ))}
              </nav>
            </div>
            <div className="md:hidden" onClick={toggleScreenLock}>
              <HamburgerMenu className={`${openNav} && 'bg-[#FFD230]' `} />
            </div>
          </div>
        </div>
      </div>
      {
        openNav && (
          <>
            <div className="relative z-50 flex flex-col font-neue-montreal  h-screen text-black pt-[20vh]  items-center">
              <nav className="flex flex-col text-center gap-10 text-[2.5rem]">
                {
                  navlinks.map((item, index) => (
                    <a href=""
                      key={index}
                      className=" text-black hover:text-gray-700 transition-colors duration-200
                           animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0,
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                      }}
                      onClick={toggleScreenLock}
                    >{item}</a>
                  ))
                }
              </nav>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Navbar;
