import React from 'react'

const ViewProfile = ({ setViewModalOpen, vieModalData }: any) => {
  return (
    <div
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative  rounded-lg shadow bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-lg font-semibold  text-white">View Details</h3>
            <button
              className="text-gray-400 bg-transparent  rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              onClick={() => {
                setViewModalOpen(false);
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <ul className="my-4 space-y-3">
              <li>
                <span className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    FirstName : {vieModalData?.firstName}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    LastName : {vieModalData?.lastName}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-center p-3 text-base font-bold  rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Age : {vieModalData?.age}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-center p-3 text-base font-bold  rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Gender : {vieModalData?.gender}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-center p-3 text-base font-bold  rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Country : {vieModalData?.country}
                  </span>
                </span>
              </li>
              <li>
                <span className="flex items-center p-3 text-base font-bold  rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 text-white">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    City : {vieModalData?.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile