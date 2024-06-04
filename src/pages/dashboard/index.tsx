import AdminTable from '@/components/Admin/AdminTable'
import MyLayout from '@/components/UiComponent/MyLayout'
import React from 'react'

const index = () => {
    return (
        <MyLayout>
            <div>Dashboard</div>
            <AdminTable />
        </MyLayout>
    )
}

export default index