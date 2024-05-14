import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link,  useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFoods = () => {
    const navigate =useNavigate()
    // const food =useLoaderData()
    const [item,setItem]=useState({})
const {_id} = useParams()
    const { image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name } = item || {}

useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/foods")
        const data = await res.json()
        const singledata = data?.find(item => item._id == _id)
        setItem(singledata)
    }
    fetchData()
}, [_id])

    const handleUpdateData = (e) => {
        e.preventDefault()
        const form=e.target;
        const image = form.donetorPhoto.value;
        const price = form.price.value;
         const expired_datetime = form.expired_datetime.value;
        const  additional_notes = form.additional_notes.value;
       const  food_imag= form.food_imag.value;
       const donator_name = form.donator_name.value;
        // --------const 
        const food_name=form.food_name.value;
        const pickup_location=form.pickup_location.value;
        const quantity=form.quantity.value;

// console.log( food_name, pickup_location,  quantity,image,price,expired_datetime,donator_name,additional_notes,food_imag)
        const updateFood = {  food_name, pickup_location,  quantity,image,price,expired_datetime,donator_name,additional_notes,food_imag }
// ------------------
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, update it!"
}).then((result) => {
    if (result.isConfirmed) {
        e.target.reset();
// -----------------------



        
        fetch(`http://localhost:5000/foods/${_id}`,
         {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    navigate('/')
                    Swal.fire({
                        title: "Updated!",
                        text: "Food Item Updated",
                        icon: "success"
                       

                    })
                }
                
            })
     } })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Update Your Food Items</h1>
                <form onSubmit={handleUpdateData}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" >Food Name</label>
                            <input name="food_name" defaultValue={food_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Pickup Location</label>
                            <input name="pickup_location" defaultValue={pickup_location} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Quantity</label>
                            <input name="quantity" defaultValue={quantity} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Donator Name</label>
                            <input name="donator_name" defaultValue={donator_name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Donetor Photo</label>
                            <input name="donetorPhoto" defaultValue={image} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Price</label>
                            <input name="price" type="text" defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200" >Additional Notes</label>
                            <textarea type="textarea" name="additional_notes" defaultValue={additional_notes} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Expired Datetime</label>
                            <input name="expired_datetime" type="text" defaultValue={expired_datetime} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Photo URL</label>
                            <input name="food_imag" type="text" defaultValue={food_imag} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        
                    </div>

                    <div className="flex mt-6  text-xl p-2 justify-center rounded-xl bg-lime-400 btn">
                        <input type="submit" value="Update" />
                    </div>
                    <div className="bg-slate-300 btn w-full my-2 text-xl font-bold text-green-400">
    
                    <Link to={'/'}><button>Return to Home</button></Link>
                    </div>
                    
                </form>
            </section>
        </div>
    );
};

export default UpdateFoods;