import { useContext } from "react";
import { AuthContext } from "../../Routs/AuthProvider";
import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";


const Mylist = () => {

    const {user}=useContext(AuthContext)
    const data =useLoaderData([])||[]
    const userData= data.filter(data=>data.userEmail==user.email)
    console.log(userData)
    return (
        <div>
            <section
                id="Projects"
                data-aos="zoom-in-up"
                data-aos-offset="50"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {
                userData && userData.map((item,idx)=><ListCard key={idx} item={item}></ListCard>)
            }
            </section>
        </div>
    );
};

export default Mylist;