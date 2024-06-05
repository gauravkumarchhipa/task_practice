import { useRouter } from 'next/router';
import React from 'react'
import Cookies from 'js-cookie';
const Login = ({ setLogin }: any) => {
    const router = useRouter();
    const submitHandler = () => {
        router.push("/dashboard");
        Cookies.set('login', "true");
        setLogin(false);
    }
    return (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative  rounded-lg shadow bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            Sign in to our platform
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-hide="authentication-modal" onClick={() => { setLogin(false); }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                                <input type="email" name="email" id="email" className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                                <input type="email" name="email" id="email" className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => { submitHandler(); }}>Login to your account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login