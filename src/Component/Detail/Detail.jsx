import { useContext, useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import './Detail.css'
import { ImCross } from "react-icons/im";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import swal from "sweetalert";
import toast from "react-hot-toast";
import { AuthContext } from "../../Routs/AuthProvider";

const Detail = () => {
    
    const {user}=useContext(AuthContext)
    const food = useLoaderData({}) || {}
    const [modal, setModal] = useState(false)
    const { _id, image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name } = food


    const handleRequest = () => {
        setModal(!modal);
    };

    // ----------------------------
    const handleAddOrder = (e) => {
        e.preventDefault()
        // const food_name = e.target.name.value;
        const food_name = e.target.food_name.value
        const pickup_location = e.target.pickup_location.value;
        const quantity = e.target.quantity.value;
        const image = e.target.donetorPhoto.value;
        const price = e.target.price.value;
        const expired_datetime = e.target.expired_datetime.value;
        const additional_notes = e.target.additional_notes.value;
        const food_imag = e.target.food_imag.value;
        const donator_name = e.target.donatorName.value;
        const userEmail = e.target.userEmail.value
        console.log(userEmail, image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name )

        const newOrders = { userEmail, image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name}
        console.log(newOrders)

        // if (!food_name || !pickup_location || !quantity || !food_imag || !price || !quantity || !expired_datetime || !donator_name) {
        //     return toast.error('Pls provide All datas')
        // }
        e.target.reset();
        fetch('https://practiceserver-11.onrender.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
                handleRequest()
                swal({
                    title: "New Food Order Added",
                    text: "sucessfully",
                    icon: "success",
                });
            })
    }

    return (
        <div>
            <Element name="section1">
                <div className="active-modal card  sm:max-w-[330px] lg:max-w-[1150px] bg-base-100 shadow-xl my-14">
                    <figure className='bg-slate-100 rounded-xl py-6'>
                        <img className='max-w-full rounded-xl' src={food_imag} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{food_name}</h2>
                        <p>Pickup Location : {pickup_location}</p>
                        <hr />
                        <p><span className='text-xl font-semibold'> Price : </span>  {price} $</p>
                        <hr />
                        <p><span className='text-xl font-semibold'>Additional Notes : </span>  {additional_notes}</p>
                        <div className="flex gap-3 my-4">
                            <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100"> {donator_name}</div>
                            <div className=" w-10"><img src={image} alt="" className="rounded-full" /></div>
                        </div>
                        <hr />
                        <div>
                            {/* ----------- */}
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>

                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>Quantity:</td>

                                            <td>{quantity}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>Expired Datetime:</td>

                                            <td>{expired_datetime}</td>
                                        </tr>
                                        {/* row 3 */}




                                    </tbody>
                                </table>
                            </div>
                            {/* -------------- */}
                        </div>
                        <div className="card-actions justify-between px-4">

                            <div>
                                <Link to="section1" smooth={true} duration={500}>
                                    <button onClick={() => handleRequest(_id)} className="btn btn-primary">Request</button>
                                </Link>
                            </div>


                            <a href="#" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" ></path>
                                </svg>
                                <Link to='/'> <span>Return Home</span></Link>
                            </a>

                        </div>
                    </div>
                </div>

                {/* ----------------------------Modal? */}
                {modal &&
                    <>
                        <div className=" mt-20">

                            <div onClick={handleRequest} className="overlay"></div>
                            <div className="modal-content">
                                <section className="max-w-4xl mt-96 p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 ">
                                    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Update Your Food Items</h1>

                                    <form onSubmit={handleAddOrder}>
                                        <div className="grid grid-cols-1 gap-6  sm:grid-cols-2">
                                            <div>
                                                <label className="text-white dark:text-gray-200" >Food Name</label>
                                                <input disabled name="food_name" defaultValue={food_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-white dark:text-gray-200" >Pickup Location</label>
                                                <input disabled name="pickup_location" defaultValue={pickup_location} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-white dark:text-gray-200" >Quantity</label>
                                                <input name="quantity" defaultValue={quantity} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-white dark:text-gray-200" >Donator Name</label>
                                                <input disabled name="donatorName" defaultValue={donator_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" >Donetor Photo</label>
                                                <input disabled name="donetorPhoto" defaultValue={image} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" >Email</label>
                                                <input disabled name="userEmail" defaultValue={user.email} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-white dark:text-gray-200" >Price</label>
                                                <input disabled name="price" type="text" defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            


                                            <div>
                                                <label className="text-white dark:text-gray-200" >Additional Notes</label>
                                                <textarea type="textarea" name="additional_notes" defaultValue={additional_notes} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" >Expired Datetime</label>
                                                <input disabled name="expired_datetime" type="text" defaultValue={expired_datetime} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>

                                            <div>
                                                <label className="text-white dark:text-gray-200" >Photo URL</label>
                                                <input disabled name="food_imag" type="text" defaultValue={food_imag} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>

                                        </div>

                                        <div className="flex mt-6  text-xl p-2 justify-center rounded-xl bg-lime-400 btn">
                                            <input type="submit" value="Submit" />
                                        </div>
                                        <div className="bg-slate-300 btn w-full my-2 text-xl font-bold text-green-400">

                                            <button onClick={handleRequest}>

                                                Back
                                            </button>
                                        </div>


                                    </form>
                                </section>

                            </div>

                        </div>
                    </>
                }
                {/* ----------------------------Modal? */}
            </Element>
        </div>
    );
};

export default Detail;