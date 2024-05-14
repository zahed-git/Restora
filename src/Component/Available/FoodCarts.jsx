import { Link } from "react-router-dom";


const FoodCarts = ({ food }) => {

    const { _id,userEmail, image, food_name, food_imag, pickup_location, additional_notes, price, quantity, expired_datetime, donator_name } = food
    return (
        <div>
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                
                    <img src={food_imag}
                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <span className="text-gray-500 mr-3 uppercase text-xs">{donator_name}</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">{food_name}</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">{price}$</p>

                            <p className="text-sm text-gray-600  ml-2">{pickup_location}</p>

                            
                        </div>
                        <div className="mx-auto">
                            <Link to={`/detail/${_id}`}><button className="btn btn-primary  w-full">View Detail</button></Link>
                            </div>
                    </div>
                
            </div>
        </div>
    );
};

export default FoodCarts;