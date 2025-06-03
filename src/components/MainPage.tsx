import { PageContent } from "../constants";
import Navbar from "./Navbar";

function MainPage() {
  return (
    <div className="bg-amber-300 min-h-screen ">
      <div className="h-screen w-full bg-black  fixed z-5 text-white flex items-center justify-center ">
        <div className="bg-amber-300 h-screen z-20 absolute w-full">
          <PageContent className="text-white"/>
        </div>
        <PageContent />
      </div>
      <div className="left-0 right-0 top-0 fixed z-0">
        <Navbar />
      </div>
      <div className="relative">
        <PageContent />
      </div>
    </div>
  )
}

export default MainPage;
// my-[25vh] xl:my-[15vh] 