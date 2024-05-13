import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCarts from "./FoodCarts";
import { key } from "localforage";

const Available = () => {
    const foods = useLoaderData({}) || {}
    console.log(foods)



    return (
        <div>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Our Available Menue</h1>
                <h1 className="text-3xl">Choos From Here</h1>
            </div>
            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {
                    foods?.map((food, idx) => <FoodCarts key={idx} food={food}></FoodCarts>)
                }
            </section>

        </div>
    );
};

export default Available;