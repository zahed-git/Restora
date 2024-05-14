import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import './Detail.css'
import { ImCross } from "react-icons/im";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Detail = () => {
    // const food=useLoaderData({}) || {}

    const { _id } = useParams()
    const [items, setItems] = useState({})
    const [modal, setModal] = useState(false)
    const { image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name } = items
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:5000/foods")
            const data = await res.json()
            const singledata = data?.find(item => item._id == _id)
            setItems(singledata)
        }
        fetchData()
    }, [_id])


    const handleRequest = () => {
        console.log(_id)
        setModal(!modal);
    };

    // if(modal) {
    //   document.body.classList.add('active-modal')
    // } else {
    //   document.body.classList.remove('active-modal')
    // }



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
                        <div className="card-actions justify-start">

                            <div>
                                <Link to="section1" smooth={true} duration={500}>
                                    <button onClick={() => handleRequest(_id)} className="btn btn-primary">Request</button>
                                </Link>
                                {/* <Link to={`/update/${_id}`}><button className="btn btn-primary mx-2">Update</button></Link> */}
                            </div>


                            <Link to={'/'}><button className="btn btn-primary">Return to Home</button></Link>

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
                                    {/* <form onSubmit={handleUpdateData}> */}
                                    <form >
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
                                                <input disabled name="donator_name" defaultValue={donator_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                            </div>
                                            <div>
                                                <label className="text-white dark:text-gray-200" >Donetor Photo</label>
                                                <input disabled name="donetorPhoto" defaultValue={image} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
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
                                            <input type="submit" value="Request" />
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