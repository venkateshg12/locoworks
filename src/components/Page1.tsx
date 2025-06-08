import { img1, img2, img3, img4, img5, Text } from "../constants";

const Page1 = () => {
  return (
    <div id="projects" data-scroll data-scroll-section data-scroll-speed="0" className="page1  bg-center bg-cover  w-full h-screen bg-black relative">
      <div className=" flex h-full my-auto    flex-col items-center justify-center text-center text-white">
        <Text trtext="Converse" dataimg={img1} />
        <Text trtext="Nike Nal" dataimg={img2} />
        <Text trtext="Mineral" dataimg={img3}/>
        <Text trtext="future world" dataimg={img4} />
        <Text trtext="Beyonce" dataimg={img5} />
      </div>
    </div>
  )
}

export default Page1;