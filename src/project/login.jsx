import axios from 'axios';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'; 
import Growerdash from './growerdash';
export default function Login() {
    // alert("ghghg");
    var navigate=useNavigate();
    const [userobj, setUserObj] = useState({
        email: "",
        password: ""
    })
    function doupdateLogin(event) {
        const { name, value } = event.target;
        setUserObj({ ...userobj, [name]: value })
    }
    async function dofetchsignup() {
        // console.log("sfs");
        const url = `http://mern-project-2024.onrender.com/profile/fetch-signup`;

        // alert(userobj.password);
        const serverMsg = await axios.post(url,userobj);
        console.log(serverMsg.data);
        if (serverMsg.data.status === true) {
            localStorage.setItem("token",serverMsg.data.jtoken);
            console.log(serverMsg.data.jtoken);
            if(serverMsg.data.res==='Grower')
            {
                navigate("/gotogrowerdash");
            }
            else
            {
                navigate("/gotoconsumerdash");
            }
        }
        else {
            alert(serverMsg.data.msg + " " + serverMsg.data.err);
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        login in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={doupdateLogin}/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                     onChange={doupdateLogin}/>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={dofetchsignup}>
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
