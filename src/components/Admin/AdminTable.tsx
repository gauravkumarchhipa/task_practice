import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminTable = () => {
    const tableData =
        [
            {
                name: "Gaurav",
                age: 24,
                xender: "Male",
                country: "india"
            },
            {
                name: "Amit",
                age: 25,
                xender: "Male",
                country: "America"
            },
            {
                name: "Ankit",
                age: 30,
                xender: "Male",
                country: "india"
            },
            {
                name: "Eleven",
                age: 15,
                xender: "Female",
                country: "America"
            }
        ]

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

    const Bardata = {
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
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Xender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((data: any, i: number) => (
                            <tr className=" border-b bg-gray-800 border-gray-700" key={i}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data?.name}
                                </th>
                                <td className="px-6 py-4">
                                    {data?.age}
                                </td>
                                <td className="px-6 py-4">
                                    {data?.xender}
                                </td>
                                <td className="px-6 py-4">
                                    {data?.country}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="w-full max-w-md mx-auto mt-10">
                <Bar data={Bardata} options={options} />
            </div>
        </div>
    )
}

export default AdminTable