import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { ImageContainer, img10, img11, img12, img13, img14, img15, img16, img17, img6, img7, img8, img9 } from './constants';

const Page2 = () => {
  return (
    <>
      <div className='w-full min-h-screen p-2 md:p-[1rem] flex items-center justify-center overflow-hidden ' data-scroll data-scroll-section data-scroll-speed="0">
        <div className='grid  grid-cols-2 gap-2 md:gap-4 2xl:gap-7 lg:grid-cols-3 2xl:grid-cols-4 grid-row-10 flex-flex-wrap overflow-hidden'>
          <ImageContainer img={img6} text1="chicago blackhawks" text2="best days ever" className='col-span-4 row-span-3'  />
          <ImageContainer img={img7} text1='The ordinary ' text2='made divine' />
          <ImageContainer img={img8} text1='Windswept' text2='and tree' />
          <ImageContainer img={img9} text1='A moment' text2='froze in the time' />
          <ImageContainer img={img10} text1='breathe' text2='in the wild' />
          <ImageContainer img={img11} text1='Footprints on' text2='the untamed land' />
          <ImageContainer img={img12} text1='softwords' text2='on loud days' />
          <ImageContainer img={img13} text1='Reality' text2='slightly rearranged' />
          <ImageContainer img={img14} text1='Heavenly' text2='chaos in harmony' />
          <ImageContainer img={img15} text1='A dream' text2='stitched in pixels' />
          <ImageContainer img={img16} text1='captured' text2='not created ' />
          <ImageContainer img={img17} text1='shot through' text2='lens of wonder' />
        </div>
      </div>
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='flex flex-col gap-4 group justify-center items-center cursor-pointer font-helveticamedium my-[2rem] font-bold uppercase'>
        <span className='scale-[1.7] opacity-0 group-hover:opacity-100 '><FaChevronUp /></span>
        <h1>back to top</h1>
      </div>
    </>
  )

}

export default Page2;

