import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { LoginValidation } from './loginValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ setLogin }: any) => {
    const router = useRouter();
    const [user, setUser] = useState([]);
    const { control, handleSubmit, formState: { errors }, reset }: UseFormReturn<any> = useForm<any>({
        resolver: yupResolver(LoginValidation() as any),
        mode: "onChange",
    });
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch('http://localhost:8000/user');
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, []);
    const submitHandler = async (data: any) => {
        const loginData = user?.filter((userData: any) => userData?.email === data?.email && userData?.password === data.password)
        if (loginData?.length > 0) {
            toast.success("Login Successfully");
            Cookies.set('login', "true");
            router.push("/dashboard");
            setLogin(false);
        } else {
            toast.error("Invalid email or password");
        }
    }
    function renderErrorMessage(error: any) {
        if (error && typeof error.message === 'string') {
            return <p className="absolute text-red-600 text-xs">{error.message}</p>;
        }
        return null;
    }
    return (
      <>
        <div
          id="authentication-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-[#1b19196b]"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative  rounded-lg shadow bg-gray-200">
              <div className="relative flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-gray-700">
                  Sign in to our platform
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-700 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium  text-gray-700"
                    >
                      Your Email
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          type="email"
                          id="email"
                          className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-500 placeholder-gray-400 text-gray-700"
                          placeholder="Enter your email"
                          {...field}
                        />
                      )}
                    />
                    {renderErrorMessage(errors?.email)}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium  text-gray-700"
                    >
                      Your Password
                    </label>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          type="password"
                          id="password"
                          className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 border-gray-500 placeholder-gray-400 text-gray-700"
                          placeholder="Enter your password"
                          {...field}
                        />
                      )}
                    />
                    {renderErrorMessage(errors?.password)}
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login to your account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    );
}

export default Login