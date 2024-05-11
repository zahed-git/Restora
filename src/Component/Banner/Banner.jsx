import bannImg from "../../assets/img/hero.png"
import bannBg from"../../assets/img/bg-hero.jpg"
import "./Banner.css"
import 'animate.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen "  style={{backgroundImage: 'url(https://i.postimg.cc/0yXMYgSD/bg-hero.jpg)'}}>
           <div className="hero-overlay bg-opacity-90"></div>
            <div className="md:flex lg:flex py-6 border border-red-800 text-white ">
                {/* -----content */}
                <div className="border border-red-800 text-white mx-auto w-1/2  lg:text-start sm:p-0 lg:p-12 space-y-7 animate__animated animate__fadeInLeft  my-auto mt-8">
                    <h1 className="text-5xl lg:text-6xl font-bold ">Enjoy Our Delicious Meal</h1>
                    <p className="text-xl">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <button className="btn bg-yellow-500">Book A Table</button>
                </div>
                {/* ------img */}
                <div className="w-1/2 animate__animated animate__fadeInRight mx-auto">
                    <img src={bannImg} className="bann sm:h-[10em] md:h-[25em] lg:h-[35em]" alt="Banner-img" />

                </div>
            </div>

        </div>
    );
};

export default Banner;