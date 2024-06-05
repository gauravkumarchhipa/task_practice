import React from 'react'
import dynamic from 'next/dynamic'
const Profile = dynamic(() => import('@/components/Profile/Profile'), { ssr: false });
const MyLayout = dynamic(() => import('@/components/UiComponent/MyLayout'), { ssr: false });
const index = () => {
    return (
        <MyLayout>
            <Profile />
        </MyLayout>
    )
}

export default index