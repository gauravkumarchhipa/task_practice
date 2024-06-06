import React from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const MyLayout = dynamic(() => import('@/components/UiComponent/MyLayout'), { ssr: false });
const AdminTable = dynamic(() => import('@/components/Admin/AdminTable'), { ssr: false });
const Index = () => {
    const router = useRouter();
    return (
      <MyLayout>
        <div className="m-8">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center m-4"
            onClick={() => {
              router.push("/profile");
            }}
          >
            Create Profile
          </button>
          <AdminTable />
        </div>
      </MyLayout>
    );
}
export default Index