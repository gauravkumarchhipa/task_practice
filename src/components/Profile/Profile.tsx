import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { ProfileValidation } from './ProfileValidation';
import Select from "react-select";
import { useRouter } from 'next/router';
const Profile = () => {
    const router = useRouter();
    const { control, handleSubmit, formState: { errors }, reset }: UseFormReturn<any> = useForm<any>({
        resolver: yupResolver(ProfileValidation() as any),
        mode: "onChange",
    });

    const submitHandler = async (data: any) => {
        createProfileUser(data)
    }

    const createProfileUser = async (data: any) => {
        const response = await fetch('http://localhost:8000/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName: data?.firstName, lastName: data?.lastName, age: data?.age, gender: data?.gender?.value, country: data?.country?.value, city: data?.city?.value })
        });
        if (!response.ok) {
            throw new Error('Failed to submit profile data');
        }
        const resData = await response.json();
        console.log(resData);
        reset();
        router.push("/dashboard")
    }

    function allowOnlyNumbers(event: any) {
        const ctrl = event.ctrlKey || event.metaKey;
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Allow control keys: backspace, tab, home, end, left, right, up, down
        if (
            (ctrl && keyCode === 86) || // Ctrl + V
            !ctrl && (
                keyCode === 13 || // Enter
                keyCode === 8 ||  // Backspace
                keyCode === 9 ||  // Tab
                keyCode === 35 || // Home
                keyCode === 36 || // End
                keyCode === 37 || // Left Arrow
                keyCode === 39 || // Right Arrow
                keyCode === 38 || // Up Arrow
                keyCode === 40 ||  // Down Arrow
                keyCode === 46 ||  // Delete
                (keyCode >= 96 && keyCode <= 105) || (keyCode >= 112 && keyCode <= 123))
        ) {
            return;
        }

        if (!/^[0-9]+$/.test(keyValue)) {
            event.preventDefault();
        }
    }
    function onKeyDownHandler(e: any) {
        allowOnlyNumbers(e)
    }

    function renderErrorMessage(error: any) {
        if (error && typeof error.message === 'string') {
            return <p className="absolute text-red-600 text-xs">{error.message}</p>;
        }
        return null;
    }

    const optionGender: any = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ];
    const optionCity: any = [
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'surat', label: 'Surat' },
        { value: 'vadodara', label: 'Vadodara' },
        { value: 'hyderabad', label: 'Hyderabad' },
        { value: 'pune', label: 'Pune' },
    ];

    const optionCountry: any = [
        { value: 'india', label: 'India' },
        { value: 'usa', label: 'Usa' },
        { value: 'canada', label: 'Canada' },
    ];

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            backgroundColor: 'white',
            borderColor: 'gray',
            minHeight: '38px',
            height: '38px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'blue',
            },
        }),
        valueContainer: (provided: any) => ({
            ...provided,
            height: '38px',
            padding: '0 6px',
        }),
        input: (provided: any) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        indicatorsContainer: (provided: any) => ({
            ...provided,
            height: '38px',
        }),
    };
    return (
        <form className="max-w-sm mx-auto pt-5" onSubmit={handleSubmit(submitHandler)} >
            <div className="mb-6">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your first name" {...field} />
                    )} />
                {renderErrorMessage(errors?.firstName)}
            </div>
            <div className="mb-6">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" {...field} />
                    )} />
                {renderErrorMessage(errors?.lastName)}
            </div>
            <div className="mb-6">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                <Controller
                    name="age"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input onKeyDown={onKeyDownHandler} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your age" {...field} />
                    )} />
                {renderErrorMessage(errors?.age)}
            </div>
            <div className="mb-6">
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            name="gender"
                            placeholder="Select Gender"
                            options={optionGender}
                            styles={customStyles}
                        />
                    )}
                />
                {renderErrorMessage(errors?.gender)}
            </div>
            <div className="mb-6">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            isSearchable={true}
                            name="country"
                            placeholder="Select Country"
                            options={optionCountry}
                            styles={customStyles}
                        />
                    )}
                />
                {renderErrorMessage(errors?.country)}
            </div>
            <div className="mb-6">
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            name="city"
                            placeholder="Select City"
                            options={optionCity}
                            styles={customStyles}
                        />
                    )}
                />
                {renderErrorMessage(errors?.city)}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}

export default Profile