import { Link, useNavigate } from "react-router-dom";


const Carts = ({food}) => {
    const navigate =useNavigate()
    const { _id, image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name } = food
    return (
        <div>
            
            <div className="container mx-auto ">
                <div className="sm:flex duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="  w-full  sm:w-3/4 bg-white px-10 py-4">
                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50 ">
                            <div className="md:w-4/12 2xl:w-1/4 w-full duration-500 hover:scale-105 hover:shadow-xl">
                                <img src={food_imag} alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
                                <img src={food_imag} alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <div className="flex text-center">
                                <p className="text-xs mt-3 leading-3 text-gray-800 md:pt-0 pt-4">{donator_name}</p>
                                <div className="w-10 rounded-full mx-3 duration-500 hover:scale-105 hover:shadow-xl">
                                    <img src={image} alt="" className="rounded-full" />
                                </div>
                                </div>
                                
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800 py-4">{food_name}</p>
                                    
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">Quantity: {quantity}</p>
                                <p className="w-96 text-xs leading-3 text-gray-600 py-4">Nots : {additional_notes}</p>
                                <p className="w-96 text-xs leading-3 text-gray-600">Expired Date-time : {expired_datetime}</p>
                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex itemms-center">
                                        <Link to={`/detail/${_id}`}>
                                        <p className="text-xs font-bold leading-3 underline text-red-500 pl-5 cursor-pointer">View Detail</p>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                    <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Price</span>
                            <span className="font-semibold text-sm">{price}$</span>
                        </div>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">pickup_location</span>
                            <span className="font-semibold text-sm">{pickup_location}</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;