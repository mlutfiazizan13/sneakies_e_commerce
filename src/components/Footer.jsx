import React, {Component, Fragment} from 'react';
import logo  from "../assets/Sneakies.png"

import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='px-20 py-7 text-sm bg-zinc-50'>
                    <div className="flex flex-wrap lg:grid lg:grid-cols-6 gap-3">
                        <div className="flex flex-col col-span-2">
                            <img className="w-32 py-2" src={logo} alt="" />
                            {/* <p className='text-2xl font-medium py-2'>e commerce</p> */}
                            <p className='font-bold'>Lorem ipsum</p>
                            <p className='py-1'>Lorem ipsum</p>
                            <p className=''>Lorem ipsum</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3'>Lorem ipsum</p>
                            <a href="#About" className='py-1 hover:text-[#3789E5] transition duration-300 ease-in-out'>Lorem ipsum</a>
                            <Link to="/contact-us" className='py-1 hover:text-[#3789E5] transition duration-300 ease-in-out'>Lorem ipsum</Link>
                        </div>
                        <div className='flex flex-col lg:flex lg:flex-col gap-2'>
                            <p className='font-bold pb-3'>Lorem ipsum</p>
                            <p><Link to="/financial-services" className='py-1 hover:text-[#3789E5] transition duration-300 ease-in-out'>FLorem ipsum</Link></p>
                            <p><Link to="/enterprise-level" className='py-1 hover:text-[#3789E5] transition duration-300 ease-in-out'>Lorem ipsum</Link></p>
                            <p><Link to="/sme-level" className='py-1 hover:text-[#3789E5] transition duration-300 ease-in-out'>Lorem ipsum</Link></p>
                            <p><Link to="/database-middleware" className='py-1 hover:text-[#3789E5] transition duration-300 ease-in-out'>Lorem ipsum</Link></p>
                        </div>
                        <div className='flex flex-col'>
                            <Link to="/our-products" className='font-bold pb-3 hover:text-[#3789E5] transition duration-300 ease-in-out'>Lorem ipsum</Link>
                            <p className='py-1'>Lorem ipsum</p>
                            <p className='py-1'>Lorem ipsum</p>
                            <p className='py-1'>Lorem ipsum</p>
                            <p className='py-1'>Lorem ipsum</p>
                            {/* <p className='py-1'>Lorem ipsum</p> */}
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3'>Lorem ipsum</p>
                            <p className='py-1'>Lorem ipsum</p>
                            <p className='py-1'>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className='py-3 bg-[#212121] text-center text-white lg:text-sm text-xs'>
                Copyright ©2022
                </div>
            </Fragment>
        );
    }
}
 
export default Footer;