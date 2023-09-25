import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return ( 
        <Fragment>
        <div id='page-container' className='relative min-h-screen'>
            <Navbar />
            <div id='content-wrap' className='pb-60'>
                <Outlet />
            </div>
            <footer id='footer' className='absolute bottom-0 w-full h-44'>
                <Footer />
            </footer>
        </div>
        </Fragment>
     );
}
 
export default MainLayout;