import Link from 'next/link'
import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
const Login = dynamic(() => import('../Login/Login'), { ssr: false });
const Header = () => {
    const [login, setLogin] = useState<Boolean>(false);
    const router = useRouter();
    const loginValue = Cookies.get('login') || false;
    return (
        <>
            <nav className="border-gray-200 bg-slate-500">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Practice</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                            <li>
                                {loginValue ?
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                                        onClick={() => { Cookies.remove("login"); router.push("/"); }}>
                                        Logout
                                        <LogoutIcon />
                                    </button>
                                    :
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
                                        onClick={() => { setLogin(true); }}>
                                        <LoginIcon />
                                        Login
                                    </button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {login && <Login setLogin={setLogin} />}
        </>
    )
}

export default Header