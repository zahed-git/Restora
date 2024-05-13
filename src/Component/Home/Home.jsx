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
                data-aos-offset="200"><Wellcome /></div>
            

            <div className="flex"
                data-aos="zoom-in-up"
                data-aos-offset="200">
                <h1 className="mx-auto font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Most Popular Items</h1>
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="200"><Carts />
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="200"><Available />
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="200"><Shaffs />
            </div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="200"><Client />
            </div>




        </div>
    );
};

export default Home;