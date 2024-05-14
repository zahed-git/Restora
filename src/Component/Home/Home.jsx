import { Link, useLoaderData } from "react-router-dom";
import Available from "../Available/Available";
import Banner from "../Banner/Banner";
import LoggedIn from "../UsersLogInOut/LoggedIn";
import Carts from "./Carts";
import Client from "./Client";
import Shaffs from "./Shaffs";
import Wellcome from "./wellcome";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const foods = useLoaderData([]) 
    console.log(foods)
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <div className="space-y-8">
            <Banner />
            <div data-aos="zoom-in-up"
                data-aos-offset="50"><Wellcome /></div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="50">
                <div className="flex">
                    <h1 className="mx-auto font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Our Most Popular Items</h1>
                </div>
               
                    <div className=" shadow-md my-10 mx-4">
                        {
                            foods && foods.map((food, idx) => <Carts key={idx} food={food}></Carts>)
                        }
                        <div className="flex justify-center ">
                        <Link to={'/availablefoods'} className="flex font-bold text-indigo-600 text-xl my-10 duration-500 hover:scale-105 hover:shadow-xl">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Show All
                        </Link>
                        </div>
                        
                    </div>
               
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="50"><Shaffs />
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="50"><Client />
            </div>




        </div>
    );
};

export default Home;