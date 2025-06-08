import { FaChevronUp } from "react-icons/fa";
import { ImageContainer, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img6, img7, img8, img9 } from '../constants';

const Page2 = () => {
    return (
        <>
            <div id="studies" className='w-full min-h-screen p-2 md:p-[1rem] flex items-center justify-center overflow-hidden ' data-scroll data-scroll-section data-scroll-speed="0">
                <div className='w-full'>
                    <div className='grid min-h-screen w-full  gap-2 md:gap-4 2xl:gap-7 
                     grid-cols-2 auto-rows-[minmax(20vw,25vw)]
                       md:grid-cols-2 md:auto-rows-[minmax(17vw,20vw)]
                       lg:grid-cols-3 lg:auto-rows-[minmax(8vw,10vw)]
                       2xl:grid-cols-4
                      overflow-hidden'>
                        <ImageContainer img={img6} text1="chicago blackhawks" text2="best dasy ever" className=' row-span-3 md:row-span-4 lg:row-span-3 2xl:row-span-4' />
                        <ImageContainer img={img7} text1='The ordinary ' text2='made divine' className=' row-span-2  md:row-span-3 lg:row-span-4 2xl:row-span-3' />
                        <ImageContainer img={img8} text1='Windswept' text2='and tree' className='row-span-2  md:row-span-3 lg:row-span-2 2xl:row-span-2' />
                        <ImageContainer img={img9} text1='A moment' text2='froze in the time' className='  row-span-2 md:row-span-3 lg:row-span-3 2xl:row-span-3' />
                        <ImageContainer img={img10} text1='breathe' text2='in the wild' className=' row-span-3 md:row-span-4 lg:row-span-4 2xl:row-span-4' />
                        <ImageContainer img={img11} text1='Footprints on' text2='the untamed land' className='row-span-2 md:row-span-3 lg:row-span-4 2xl:row-span-3' />
                        <ImageContainer img={img12} text1='softwords' text2='on loud days' className=' row-span-3 md:row-span-2 lg:row-span-2 2xl:row-span-2' />
                        <ImageContainer img={img13} text1='Reality' text2='slightly rearranged' className='row-span-2 md:row-span-3 lg:row-span-5 2xl:row-span-3' />
                        <ImageContainer img={img14} text1='Heavenly' text2='chaos in harmony' className=' row-span-3 md:row-span-4 lg:row-span-3 2xl:row-span-4' />
                        <ImageContainer img={img15} text1='A dream' text2='stitched in pixels' className=' row-span-2  md:row-span-3 lg:row-span-3 2xl:row-span-3 ' />
                        <ImageContainer img={img16} text1='captured' text2='not created ' className=' row-span-3 md:row-span-2 lg:row-span-3 2xl:row-span-2' />
                        <ImageContainer img={img18} text1='Let the horizon' text2='pull you forward' className='row-span-3 md:row-span-3 lg:row-span-2 2xl:row-span-3 ' />
                        <ImageContainer img={img19} text1='felt' text2='more than spoken' className='row-span-4 md:row-span-3 lg:row-span-4 2xl:row-span-4 ' />
                        <ImageContainer img={img20} text1='Star dust' text2='in her veins' className='row-span-4 md:row-span-4 lg:row-span-5 2xl:row-span-5 ' />
                        <ImageContainer img={img21} text1='floating in the' text2='in - between' className='row-span-4 md:row-span-3 lg:row-span-2 2xl:row-span-3 ' />
                        <ImageContainer img={img22} text1='shot through' text2='lens of wonder' className='row-span-4 md:row-span-4 lg:row-span-4 2xl:row-span-3 ' />
                    </div>
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