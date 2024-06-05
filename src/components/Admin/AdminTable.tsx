import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteProfile from './DeleteProfile';
import ViewProfile from './ViewProfile';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminTable = () => {
    const [profile, setProfile] = useState([]);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [vieModalData, setVieModalData] = useState({});
    const [selectProfile, setSelectProfile] = useState("");
    useEffect(() => {
        const getProfile = async () => {
            const response = await fetch('http://localhost:8000/profile');
            const data = await response.json();
            setProfile(data);
        }
        getProfile();
    }, []);

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart of Employ and Age',
            },
        },
    };

    const bardata = {
        labels: ['Gaurav', 'Amit', 'Ankit', 'Eleven'],
        datasets: [
            {
                label: 'Ages',
                data: [24, 25, 30, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div>
                {profile?.length > 0 &&
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        FirstName
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        LastName
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Gender
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Country
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        City
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        View/Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {profile?.map((data: any) => (
                                    <tr className=" border-b bg-gray-800 border-gray-700" key={data?.id}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data?.firstName}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data?.lastName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {data?.age}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data?.gender}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data?.country}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data?.city}
                                        </td>
                                        <td className="px-6 py-4 flex">
                                            <div onClick={() => { setViewModalOpen(true); setVieModalData(data); }}>
                                                <RemoveRedEyeIcon />
                                            </div>
                                            <div onClick={() => { setDeleteModalOpen(true); setSelectProfile(data?.id) }}>
                                                <DeleteIcon />
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                }
                <div className="w-full max-w-md mx-auto mt-10">
                    <Bar data={bardata} options={options} />
                </div>
            </div>
            {viewModalOpen && <ViewProfile setViewModalOpen={setViewModalOpen} vieModalData={vieModalData} />}
            {deleteModalOpen && <DeleteProfile setDeleteModalOpen={setDeleteModalOpen} selectProfile={selectProfile} setProfile={setProfile} />}
        </>
    )
}

export default AdminTable