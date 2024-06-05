import AdminTable from '@/components/Admin/AdminTable'
import React from 'react'
import dynamic from 'next/dynamic';
const MyLayout = dynamic(() => import('@/components/UiComponent/MyLayout'), { ssr: false });
const index = () => {
    return (
        <MyLayout>
            <div>Dashboard</div>
            <AdminTable />
        </MyLayout>
    )
}
export default index