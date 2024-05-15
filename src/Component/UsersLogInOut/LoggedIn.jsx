import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routs/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import axios from "axios";

const LoggedIn = () => {
    const navigate = useNavigate()
    const { singInUser, googleLog, gitHubLog } = useContext(AuthContext)
    const [showPassword, setShowPassord] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [sucessMsg, setSucessMsg] = useState(' ')
    const emailRef = useRef()


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        // reset error msg and sucess msg to empty
        setErrorMsg(' ')
        setSucessMsg(' ')

        singInUser(email, password)
            .then((userCredential) => {
                setSucessMsg("Login successful")
                // navigate("/")
                e.target.reset()
                toast.success('Successfully Login')
                // -------mongo---
                const user = {
                    email,
                    lastLoggedAt: userCredential.user?.metadata?.lastSignInTime
                }
                navigate('/')

                axios.post("https://practiceserver-11.onrender.com/jwt",user,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                   
                })
                // ----------axious---------?
            })


            .catch((error) => {
                setErrorMsg(error.message)
                toast.error('Login error', error.message)
            });
    }
    //   ---------------
    const handleGoogle = () => {
        googleLog()
            .then((userCredential) => {
                const email = userCredential.user.email;
                console.log(email)
                navigate("/")
                toast.success('Successfully Login')
                // -------mongo---
                const user = {
                    email,
                    lastLoggedAt: userCredential.user?.metadata?.lastSignInTime
                }
                fetch('https://practiceserver-11.onrender.com/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch((error) => {
                console.log('error', error.message)
                toast.error('Login error', error.message)
            });
    }
    // --------------Git hub sing in---------
    const handleGithub = () => {
        gitHubLog()
            .then((userCredential) => {
                const email = userCredential.user.email;
                console.log(email)
                navigate("/")
                toast.success('Successfully Login')
                const user = {
                    email,
                    lastLoggedAt: userCredential.user?.metadata?.lastSignInTime
                }
                fetch('https://practiceserver-11.onrender.com/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch((error) => {
                console.log(error)
                toast.error('Login error', error.message)
            });
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Restora||Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div>
                            <div className=" gap-1">
                                <button className="text-center btn  rounded-full bg-amber-400" onClick={handleGoogle}>
                                    <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                                        <FaGoogle />
                                    </span>
                                </button>
                                <div className="text-center my-2"><p className="text-xl font-bold">OR</p></div>
                                <button className="text-center btn rounded-full bg-amber-400" onClick={handleGithub}>
                                    <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                                        <FaGithub />
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    ref={emailRef}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setShowPassord(!showPassword)} className="absolute top-14 right-2">
                                    {
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                        <div className="m-4 text-xl font-semibold">
                            {
                                errorMsg && <p>{errorMsg}</p>
                            }
                            {
                                sucessMsg && <p>{sucessMsg}</p>
                            }
                        </div>
                        <div className="mb-6">
                            <p className="m-4">New to this Webside? please  <Link to="/sinup"><span className="text-xl font-bold">Register</span></Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoggedIn;