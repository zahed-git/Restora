import { Link } from "react-router-dom";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../Routs/AuthProvider";

// ---------------------------------
// import Dateexpired_datetimePicker from 'react-dateexpired_datetime-picker';
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';




const AddFoods = () => {
//     const ValuePiece = Date | null;

// const Value = ValuePiece | [ValuePiece, ValuePiece];
//     const [value, onChange] = useState<Value>(new Date());



    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    console.log(userEmail)
    // --------------------------------
    const handleAddData = (e) => {
        e.preventDefault()
        const food_name = e.target.name.value;
        const pickup_location = e.target.pickup_location.value;
        const quantity = e.target.quantity.value;
        const image = e.target.donetorPhoto.value;
        const price = e.target.price.value;
        const expired_datetime = e.target.expired_datetime.value;
        const additional_notes = e.target.additional_notes.value;
        const  food_imag= e.target.photo.value;
        const donator_name = e.target.donatorName.value;


        const newFood = { userEmail, image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name }
        console.log(newFood)

        if (!food_name || !pickup_location || !quantity || !food_imag || !price || !quantity || !expired_datetime || !donator_name) {
            return toast.error('Pls provide All datas')
        }
        e.target.reset();
        fetch('http://localhost:5000/foods',{
           method:"POST",
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(newFood) 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                swal({
                    title: "New Food Item Added",
                    text: "sucessfully",
                    icon: "success",
                });
            })
    }


    //  --------------------   
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Resura||add-items</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-slate-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">ADD NEW ITEMS </h1>
                <form onSubmit={handleAddData}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" >Food Name</label>
                            <input name="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >PickUp location</label>
                            <input name="pickup_location" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Quantity</label>
                            <input name="quantity" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Expired Date & Time</label>
                            <input name="expired_datetime" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Donetor Name</label>
                            <input name="donatorName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Donetor Photo Url</label>
                            <input name="donetorPhoto" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200" >Additional Notes</label>
                            <textarea type="textarea" name="additional_notes" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Price</label>
                            <input name="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Photo URL</label>
                            <input name="photo" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-6  text-xl p-2 justify-center rounded-xl bg-lime-400 btn">
                        <input type="submit" value="Submit" />
                    </div>
                    <div className="bg-slate-300 btn w-full my-2 text-xl font-bold text-green-400">

                        <Link to={'/'}><button>Return to Home</button></Link>
                        {/* <Dateexpired_datetimePicker onChange={onChange} value={value} /> */}
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddFoods;