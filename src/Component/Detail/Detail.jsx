import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import './Detail.css'


const Detail = () => {
    // const food=useLoaderData({}) || {}

    const { _id } = useParams()
    const [items, setItems] = useState({})
    const [modal, setModal] = useState(false)
    const { image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name } = items


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
             {!modal &&
            <div className="card  sm:max-w-[330px] lg:max-w-[1150px] bg-base-100 shadow-xl my-14">
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
                                    <tr>
                                        <td>Travel time:</td>

                                        {/* <td>{travel_Time}</td> */}
                                    </tr>



                                </tbody>
                            </table>
                        </div>
                        {/* -------------- */}
                    </div>
                    <div className="card-actions justify-start">

                        <div>
                            <button onClick={() => handleRequest(_id)} className="btn btn-primary">Request</button>

                            {/* <Link to={`/update/${_id}`}><button className="btn btn-primary mx-2">Update</button></Link> */}
                        </div>


                        <Link to={'/'}><button className="btn btn-primary">Return to Home</button></Link>

                    </div>
                </div>
            </div>
            }
            {/* ----------------------------Modal? */}
            {modal &&
                <>
                   <div>
                    it modal
                   </div>
                </>
            }
            {/* ----------------------------Modal? */}
        </div>
    );
};

export default Detail;