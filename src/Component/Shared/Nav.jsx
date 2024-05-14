import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Routs/AuthProvider";
import toast from "react-hot-toast";
import logo from '../../assets/img/logo.png'


const Nav = () => {
  const {user,logOut}=useContext(AuthContext)
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/availablefoods'>Available Foods</NavLink></li>
    {user &&
    <>
      <li><NavLink to='/addfoods'>Add Foods</NavLink></li>
      <li><NavLink to='/mylist'>My Food Request</NavLink></li>
    </>
     } 
    <li><NavLink to='/'>Blog</NavLink></li>
  </>

const handleLogOut = () => {
  logOut()
    .then(() => {
      console.log("Sign-out successfully.")
      toast.success('sing Out successfully')
    })
    .catch((error) => {
      console.log(error.message)
    });
}

  return (
    <div className="fixed z-30 w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <div className="h-[50px]">
          <Link to={'/'}><img src={logo} alt="" className="h-full"/></Link>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ?
            <>
              <span className="text-sm font-bold">{user.photoURL ?
                <>
                  <div tabIndex={0} role="button" className="btn  btn-circle avatar">
                    <div className="w-10 rounded-full duration-500 hover:scale-105 hover:shadow-xl">
                      {/* ---------------------------- */}

                      <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                        <img alt="" src={user.photoURL} />
                      </a>


                      {/* ---------------------------- */}
                    </div>
                  </div>
                </>
                : "Anonymous User"}</span>
              <button className="btn btn-primary mx-2" onClick={handleLogOut}>LogOut</button>
            </>
            :
            <Link to='/sinin'><button className="btn btn-primary mx-10">Sing-in</button></Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Nav;