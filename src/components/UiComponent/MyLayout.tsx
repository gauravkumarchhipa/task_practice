import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MyLayout = ({ children }: any) => {
    return (
        <>
            <Header />
            <div className="ScreenMinHeight">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MyLayout