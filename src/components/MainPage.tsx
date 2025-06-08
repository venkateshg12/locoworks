import { useEffect } from "react";
import { PageContent } from "../constants";
import Navbar from "./Navbar";
import gsap from "gsap";


function MainPage() {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(".yellowContent", {
      top: "-100%",
      delay: 0.5,
      duration: 1,
      ease: "expo.out",
    }, "anim")

    tl.to(".text", {
      color: "white",
      delay: 0.5
    }, "anim")

    tl.to(".blackContent", {
      x: "100%",
      duration: 2,
      delay: 0.2,
      ease: "expo.out",
    }, "anim1")

    tl.to(".text", {
      opacity: 0,
      delay: 0.1,
      duration: 1,
    }, "anim1")

    tl.fromTo(
      ".mainContent",
      {
        // scale: 0.8,
        opacity: 0,
      },
      {
        // scale: 1,
        opacity: 1,
        delay: 0.2,
        duration: 1,
        ease: "power2.out",
      }, "anim1"
    );

  }, [])

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="bg-amber-300 min-h-screen overflow-hidden" >
      <div>
        <div className=" fixed z-40 text-center w-full h-screen overflow-hidden">
          <PageContent className="text" />
        </div>
        <div className="blackContent h-screen w-full overflow-hidden bg-black  fixed z-5 text-white flex items-center justify-center ">
          <div className="yellowContent bg-amber-300 h-screen z-20 overflow-hidden absolute w-full">
          </div>
        </div>
        <div className="mainContent">
          <div className="left-0 right-0 top-0 fixed z-50">
            <Navbar />
          </div>
          <div className="text1 relative">
            <PageContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;