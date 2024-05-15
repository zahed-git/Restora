import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import FoodCarts from "./FoodCarts";
import { key } from "localforage";
import Aos from "aos";
import axios from "axios";

const Available = () => {
    Aos.init({})
    const [foods, setFoods] = useState()
    const [items, setItems] = useState()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("https://practiceserver-11.onrender.com/foods")
    //         const data = await res.json()
    //         setFoods(data)
    //         setItems(data)
    //     }
    //     fetchData()
    // }, [])
    // -----------------axios--------?
    const url = 'http://localhost:5000/foods'
    useEffect(() => {
        axios.get(url,{withCredentials:true})
            .then(res => {
                setFoods(res.data)
                setItems(res.data)
            })
    }, [])
    // -----------------axios--------?

    const sortBydate = () => {
        const byDate = [...items]?.sort((b, a) => a.item > b.item ? 1 : -1)
        setFoods(byDate)
    }

    return (
        <div>
            <div className="text-center p-10 space-y-5">
                <h1 className="font-bold text-4xl mb-4">Our Available Menue</h1>
                <h1 className="text-3xl">Choos From Here</h1>
                <div className="dropdown mb-72 mx-auto">
                    <div tabIndex={0} role="button" className="btn m-1 bg-lime-400 px-10">
                        Search By
                        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-yellow-300 rounded-box w-52">
                        <Link><button onClick={sortBydate} className="m-2">Expire date</button></Link>
                    </ul>
                </div>
            </div>

            <section
                id="Projects"
                data-aos="zoom-in-up"
                data-aos-offset="50"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {
                    foods && foods.map((food, idx) => <FoodCarts key={idx} food={food}></FoodCarts>)
                }
            </section>

        </div>
    );
};

export default Available;