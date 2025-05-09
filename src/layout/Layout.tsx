import { Outlet } from 'react-router-dom'
import ScrollToTop from '@shared/ScrollToTop'
import Navbar from '@shared/Navbar'

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout
