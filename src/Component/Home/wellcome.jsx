import { ImSpoonKnife } from "react-icons/im";
import about1 from "../../assets/img/about-1.jpg"
import about2 from "../../assets/img/about-2.jpg"
import about3 from "../../assets/img/about-3.jpg"
import about4 from "../../assets/img/about-4.jpg"

const Wellcome = () => {
    return (
        <div >
            <div className="relative overflow-hidden bg-white">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className=" relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg ">
                            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate__animated animate__zoomIn">Welcome to our restaurant,</h1>
                            <p className="mt-4 text-xl text-gray-500 "> where culinary magic meets delightful ambiance. Nestled in the heart of [Location], our restaurant offers a feast for the senses. Step into a world of flavors where each dish tells a story of craftsmanship and passion. Our menu boasts a fusion of local ingredients and international inspirations, curated to please every palate.</p>
                        </div>
                        <div >
                            <div className="mt-10">
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8 animate__animated animate__zoomIn">
                                            <div className="grid  grid-cols-1 gap-y-6 lg:gap-y-8 ">
                                                <div className=" h-72 w-64 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img src={about1} className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className=" flex justify-end   h-64 w-64  overflow-hidden rounded-lg">
                                                    <img src={about2} alt="" className="h-full w-2/3 rounded-lg object-center" />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64  w-44 overflow-hidden rounded-lg">
                                                    <img src={about3} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="h-72 w-64 overflow-hidden rounded-lg">
                                                    <img src={about4} alt="" className="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------------------------- */}

        </div>
    );
};

export default Wellcome;