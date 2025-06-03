import Nav from "./Nav"
function Page1() {
    return (
        <div className="bg-amber-300 min-h-screen">
            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Nav />
            </div>

            {/* Main Content Container - Flexbox for perfect centering */}
            <div className="min-h-screen flex items-center justify-center px-4 pt-16 pb-8">
                <div className="text-center  w-full">
                    <h1 className="font-freightbig font-bold md:font-normal leading-tight tracking-wide
                         text-[7vw] 
                         md:text-[4rem] 
                         lg:text-6xl 
                         xl:text-7xl 
                         2xl:text-[5vw]
                         ">
                        CREATIVE PROFESSIONALS <br />
                        <em className="font-normal">DEDICATED</em> TO CULTURAL <br />
                        ADVANCEMENT THROUGH <br />
                        <em className="font-normal">STRATEGY</em> AND <em className="font-normal">DESIGN</em>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Page1;