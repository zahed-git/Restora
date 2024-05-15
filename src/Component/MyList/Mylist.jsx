import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routs/AuthProvider";
import { Link } from "react-router-dom";
import ListCard from "./ListCard";


const Mylist = () => {

    const { user } = useContext(AuthContext)
    const email=user.email
const [userData,setUserdata]=useState([])
    

useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("https://practiceserver-11.onrender.com/orders")
        const datas = await res.json()
        const userDatas =datas && datas.filter(data => data.userEmail == user.email)
        setUserdata(userDatas)
    }
    fetchData()
}, [email])

     
    return (
        <div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="50">
                <div className="flex">
                    <h1 className="mx-auto font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">Your Food Request</h1>
                </div>

                <div className=" shadow-md my-10 mx-4">
                    {
                        userData && userData.map((item, idx) => <ListCard key={idx} item={item}></ListCard>)
                    }
                    <div className="flex justify-center ">
                        <Link to={'/availablefoods'} className="flex font-bold text-indigo-600 text-xl my-10 duration-500 hover:scale-105 hover:shadow-xl">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Show Available Foods
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Mylist;