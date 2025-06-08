import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const navlinks: string[] = ["PROJECTS", "ABOUT", "STUDIES", "STORE"];

export const img1 = "https://plus.unsplash.com/premium_photo-1661780784016-84df03d7d8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29udmVyc2V8ZW58MHx8MHx8fDA%3D";
export const img2 = "https://images.unsplash.com/photo-1480099225005-2513c8947aec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVnYnklMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D";
export const img3 = "https://images.unsplash.com/photo-1612863725124-920bba0cfff9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWluZXJhbCUyMGZydWl0cyUyMGZhY2UlMjBjcmVhbXN8ZW58MHx8MHx8fDA%3D";
export const img4 = "https://images.unsplash.com/photo-1576266394503-4999348b5447?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBnYWxsZXJ5fGVufDB8fDB8fHww";
export const img5 = "https://images.unsplash.com/photo-1529976961-17e52d247c69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmV5b25jZXxlbnwwfHwwfHx8MA%3D%3D";
export const img6 = "https://images.unsplash.com/photo-1748274048033-6a5644a270ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D";
export const img7 = "https://images.unsplash.com/photo-1747134392167-7b16ac9c3c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D";
export const img8 = "https://images.unsplash.com/photo-1748959116800-a0ae76a84b2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D"
export const img9 = "https://images.pexels.com/photos/31712146/pexels-photo-31712146/free-photo-of-colorful-residential-buildings-in-lisbon-portugal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
export const img10 = "https://images.pexels.com/photos/32414131/pexels-photo-32414131/free-photo-of-cozy-relaxed-moment-in-yellow-tones.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
export const img11 = "https://images.pexels.com/photos/7408200/pexels-photo-7408200.png?auto=compress&cs=tinysrgb&w=600&lazy=load";
export const img12 = "https://images.pexels.com/photos/22020981/pexels-photo-22020981/free-photo-of-photo-of-small-huts-under-a-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
export const img13 = "https://images.unsplash.com/photo-1748989431676-331a3926ef85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D";
export const img14 = "https://plus.unsplash.com/premium_photo-1748961351465-6f5b51c15544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D";
export const img15 = "https://images.unsplash.com/photo-1747573285214-b6a4246ee727?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D"
export const img16 = "https://images.pexels.com/photos/31467865/pexels-photo-31467865/free-photo-of-traditional-scottish-bagpipe-band-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
export const img17 = "https://images.pexels.com/photos/18611201/pexels-photo-18611201/free-photo-of-wagon-of-metro-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
export const img18 = "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=300";
export const img19 = "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=300";
export const img20 = "https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=300";
export const img21 = "https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?auto=compress&cs=tinysrgb&w=300";
export const img22 = "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=300";


export const Logo = ({ className }: { className?: string }) => {
  return (
    <div>
      <svg fill="none" viewBox="0 0 71 16" className={`${className || " "} `} >
        <path fill="#000" d="M0 .854h4.124L5.15 5.718c.336 1.548.691 3.95.691 3.95h.04s.375-2.124.73-3.752L7.696.854h3.73l1.085 5.022c.355 1.648.71
                3.792.71 3.792h.04s.374-2.402.71-3.99L14.997.854h4.223L15.51 15.05h-4.164l-1.262-6.015a62 62 0 0 1-.494-2.76h-.04s-.237 1.53-.494 2.76L7.833
                15.05H3.611zm18.081 14.035 1.697-1.906c-1.065-1.29-1.657-3.017-1.657-4.982 0-4.25 2.762-7.406 7.143-7.406 1.697 0 3.157.477 4.302 1.31L31.263 
                0l1.223 1.111-1.696 1.926c1.065 1.291 1.657 3.017 1.657 4.964 0 4.249-2.802 7.384-7.183 7.384-1.697 0-3.137-.476-4.282-1.29L19.305 16zm4.46-5.043 
                4.598-5.202c-.473-.457-1.086-.735-1.854-.735-1.973 0-2.98 1.767-2.98 4.09q0 1.013.236 1.847m5.723-1.847c0-.655-.079-1.29-.257-1.826l-4.578 5.181c.473.457 
                1.085.715 1.854.715 1.973 0 2.981-1.747 2.981-4.07M32.858.854h7.006c2.88 0 5.328 1.33 5.328 4.228 0 1.628-.829 2.78-2.31 3.455v.06c1.145.437 1.737 1.231 
                1.974 2.343.374 1.706.058 3.751.573 3.891v.219h-4.066c-.395-.278-.237-2.024-.533-3.295-.258-1.092-.731-1.648-1.934-1.648h-1.914v4.943h-4.124zm4.124 
                6.294h2.21c1.183 0 1.835-.516 1.835-1.509 0-.933-.592-1.528-1.776-1.528h-2.27zM45.771.854h4.124V5.5L54.159.853h4.737l-5.27 5.717 5.565 8.477h-4.795L50.804 
                9.43l-.907 1.032v4.585h-4.124z">
        </path>
        <path fill="#000" d="M57.563 10.522h4.223c.139 1.132 1.007 1.667 2.367 1.667.81 0 1.796-.317 1.796-1.171s-.947-1.072-2.683-1.509c-2.367-.595-5.228-1.41-5.228-4.427
                     0-3.256 2.643-4.487 5.82-4.487 2.92 0 5.605 1.231 5.663 4.329h-4.084c-.119-.775-.671-1.27-1.796-1.27-.908 0-1.54.417-1.54.992 0 .833 1.205.952 3.317 1.468 
                     2.367.577 4.736 1.509 4.736 4.527s-2.743 4.744-6.078 4.744c-3.671 0-6.453-1.587-6.513-4.863">
        </path>
      </svg>
    </div>
  )
}

interface HamburgerMenuProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  size = 32,
  color = '#333',
  strokeWidth = 3,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className || "bg-gray-100"}`}>
      <button
        onClick={toggleMenu}
        className={`relative p-2 focus:outline-none  rounded-md transition-all duration-200 hover:bg-gray-200 ${className}`}
        style={{ width: size + 16, height: size + 16 }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative" style={{ width: size, height: size }}>
          {/* Top line */}
          <div
            className="absolute left-0 rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: size,
              height: strokeWidth,
              backgroundColor: color,
              top: isOpen ? '50%' : '25%',
              transform: isOpen
                ? 'translateY(-50%) rotate(45deg)'
                : 'translateY(-50%) rotate(0deg)',
              transformOrigin: 'center'
            }}
          />

          {/* Bottom line */}
          <div
            className="absolute left-0 rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: size,
              height: strokeWidth,
              backgroundColor: color,
              top: isOpen ? '50%' : '75%',
              transform: isOpen
                ? 'translateY(-50%) rotate(-45deg)'
                : 'translateY(-50%) rotate(0deg)',
              transformOrigin: 'center'
            }}
          />
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;

export const PageContent = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`font-freightbig  flex min-h-screen items-center justify-center  xl:text-7xl text-center   font-bold md:font-normal  md:text-[4rem] 2xl:text-[5vw] text-[7vw] ${className || 'text-black'} `}>
        <h1>
          CREATIVE PROFESSIONALS <br /><em>DEDICATED</em>
          TO CULTURAL <br /> ADVANCEMENT THROUGH
          <br /><em>STRATEGY</em>AND <em>DESIGN</em>
        </h1>
      </div>
    </>
  )
}


export const YellowBanner = () => {
  return (
    <div className="movingin">
      {Array(10).fill(
        <>
          <h5 className="movingintext">Branding and identity</h5>
          <h5 className="movingintext">Art direction</h5>
          <h5 className="movingintext">Type design</h5>
          <h5 className="movingintext">Creative</h5>
          <h5 className="movingintext">Digital design</h5>
        </>
      )}
    </div>
  );
};

type textProps = {
  trtext?: string;
  dataimg?: string;
}


export const Text = ({ trtext, dataimg }: textProps) => {

  const elemRef = useRef<HTMLDivElement>(null);
  // const elemRef = useRef<HTMLDivElement>(null);
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  // const [imageLoaded, setImageLoaded] = useState(false);

  /* useEffect(() => {
     if (dataimg) {
       const img = new Image();
       img.onload = () => setImageLoaded(true);
       img.src = dataimg;
     }
   }, [dataimg]);
 
   useEffect(() => {
     const page1 = document.querySelector(".page1");
 
     const handleMouseEnter = () => {
       if (page1 && dataimg) {
         gsap.to(page1, {
           backgroundImage: `url(${dataimg})`,
           duration: 0.2,
           ease: "power2.out",
           backgroundSize: "cover",
           backgroundPosition: "center",
         });
       }
     };
 
     const el = elemRef.current;
     el?.addEventListener("mouseenter", handleMouseEnter);
     return () => {
       el?.removeEventListener("mouseenter", handleMouseEnter);
     };
   }, [dataimg, imageLoaded]);*/

  useEffect(() => {
    if (!dataimg) {
      setImageStatus('error');
      return;
    }

    const img = new Image();

    img.onload = () => setImageStatus('loaded');
    img.onerror = () => setImageStatus('error');

    img.src = dataimg;
  }, [dataimg]);

  // Apply background on hover effect
  useEffect(() => {
    const page1 = document.querySelector(".page1");

    const applyBackground = () => {
      if (!page1 || !dataimg) return;

      if (imageStatus === 'loaded') {
        // Apply successful background
        gsap.to(page1, {
          backgroundImage: `url(${dataimg})`,
          duration: 0.2,
          ease: "power2.out",
          backgroundSize: "cover",
          backgroundPosition: "center",
        });
      } else if (imageStatus === 'error') {
        // Apply error background
        gsap.to(page1, {
          backgroundImage: 'none',
          backgroundColor: '#000',
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const clearBackground = () => {
      if (page1) {
        gsap.to(page1, {
          backgroundImage: 'none',
          backgroundColor: '#000',
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const el = elemRef.current;
    el?.addEventListener("mouseenter", applyBackground);
    el?.addEventListener("mouseleave", clearBackground);

    return () => {
      el?.removeEventListener("mouseenter", applyBackground);
      el?.removeEventListener("mouseleave", clearBackground);
    };
  }, [dataimg, imageStatus]);


  return (
    <>
      <div className="elem group relative overflow-hidden w-full cursor-pointer" data-img={dataimg}>
        <h2 ref={elemRef} className="font-freightbig ptext cursor-pointer group-hover:text-black  group-hover:-skew-x-16">{trtext}</h2>
        <div className="moving group-hover:opacity-100  w-full opacity-0  scale-y-0 group-hover:scale-y-100 duration-500">
          <div className="blur"></div>
          <YellowBanner />
        </div>
      </div>
    </>
  )
}

type props = {
  img: string,
  text1: string,
  text2?: string,
  rowSpan?: number,
  className?: string,
}
export const ImageContainer = ({ img, text1, text2, className }: props) => {
  return (
    <>
      <div className={`img-container  rounded-xl group ${className || ' '} `}>
        <div className="overlay  font-helvetica group-hover:opacity-100 opacity-0  rounded-xl ">
          <p >{text1}
            <br />
            <em>{text2 || ' '}</em>
          </p>
        </div>
        <div className="w-full h-full">
          {/* <img src={img} alt="" className={`img  rounded-xl`} onError={(e) => e.currentTarget.src = } /> */}
          <img
            src={img}
            alt=""
            className={`img rounded-xl`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'flex';
            }}
          />
          <div
            className="img rounded-xl bg-gray-200 flex items-center justify-center text-gray-500"
            style={{ display: 'none' }}
          >
            No Image
          </div>
        </div>
      </div>
    </>
  )
}
