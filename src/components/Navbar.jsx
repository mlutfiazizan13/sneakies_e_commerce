import { Fragment, useState } from "react";
import logo  from "../assets/Sneakies.png"
import * as Constants from "../utils/Constants";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [isShown, setShown] = useState({hoverMenu: ''});

    const [isNavActive, setNavActive] = useState(false);


    const mobileNavbar = () => {
        console.log("test");
        setNavActive(!isNavActive);
    };

    // setShown("testtest");
    const onMenuMouseEnter = (id) => {
        console.log(id);

        // clearTimeout();
        setShown({hoverMenu: id})
    }

    const onMenuMouseLeave = () => {

        console.log('out');
        setShown({hoverMenu: ''})
        // setTimeout(() => setShown({hoverMenu: ''}), 2000);

    }

    return (
        <Fragment>

            {/* Mobile Navbar */}
            <div className="sticky md:hidden top-0 z-10 border-b bg-white">
                <div className='flex items-center justify-between px-5 py-7'>

                    <div className=" h-10 w-10 p-2 text-center hover:bg-slate-200 rounded-lg">
                        <div className="relative">
                            <i className="fas fa-shopping-cart fa-xl"></i>
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[9px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 text-center -right-3 dark:border-gray-900">1</div>
                        </div>
                    </div>
                    <div className='flex items-center lg:py-0 lg:border-b-0'>
                        <Link to="/">
                            <img className="w-44" src={logo} alt="logo" />

                        </Link>
                    </div>
                    <div className=''>
                        <button type='button' onClick={mobileNavbar}>
                            <i class="fas fa-bars fa-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile_nav relative">
                <div id="mob_nav_overlay" className={isNavActive? `fixed w-screen h-screen top-0 z-30 bg-[#0000007d]` : 'hidden'}  onClick={mobileNavbar}></div>
                <div className={isNavActive ? `fixed z-50 top-0 left-0 p-8` : `hidden` }  onClick={mobileNavbar}>
                <i class="fas fa-times fa-2xl text-white"></i>
                </div>
                <div id="mob_nav_body" className={isNavActive ? `fixed bg-white top-0 right-0 border-l-2 h-screen lg:hidden lg:justify-between xl:hidden w-full max-w-[80%] duration-500 z-50`: `fixed bg-white top-0 right-0 border-l-2 h-screen translate-x-full lg:hidden lg:justify-between xl:hidden w-full max-w-[80%] duration-500 z-50` }>
                    <div class="flex flex-col text-md py-3">
                        {/* <button id="navbar_mobile_chevron" class="absolute left-0 translate-x-full w-11 h-11 bg-white hover:bg-blue-600 border hover:border-blue-600 hover:text-white rounded-full grid text-center items-center content-center duration-500">
                            <i class="fa-solid fa-chevron-left fa-lg"></i>
                        </button> */}
                        <div class="flex flex-col py-20 text-lg text-black">
                            <a href="test"></a>
                            {/* <a href="{{ route('home') }}" class='border-b py-2 px-10 hover:text-[#00a549] focus:text-[#00a549] focus:bg-slate-200 transition duration-300 ease-in-out'>BERANDA</a>
                            <a href="{{ route('about-us') }}" class='border-b py-2 px-10 hover:text-[#00a549] focus:text-[#00a549] focus:bg-slate-200 transition duration-300 ease-in-out'>TENTANG KAMI</a>
                            <a href="{{ route('gallery') }}" class='border-b py-2 px-10 hover:text-[#00a549] focus:text-[#00a549] focus:bg-slate-200 transition duration-300 ease-in-out'>GALERI</a>
                            <a href="{{ route('news') }}" class='border-b py-2 px-10 hover:text-[#00a549] focus:text-[#00a549] focus:bg-slate-200 transition duration-300 ease-in-out'>BERITA</a> */}

                        </div>
                            {/* <a href="{{ route('contact-us') }}" class='border-b py-2 px-10 hover:text-[#00a549] focus:text-[#00a549] focus:bg-slate-200 transition duration-300 ease-in-out'>HUBUNGI KAMI</a> */}
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}

            {/* desktop navbar */}
            <div className="hidden md:block sticky top-0 z-10">
                <div className="flex py-2 px-20 divide-x divide-black justify-end text-xs bg-gray-200">
                    <p className="px-3">Find a Store</p>
                    <p className="px-3">Help</p>
                    <p className="px-3">Newsletter</p>
                </div>
                <div className="bg-white border-b">
                    <div className='flex flex-col items-center px-20 lg:items-center lg:flex-row'>
                        <div className='flex items-center lg:py-0 lg:border-b-0'>
                            <Link to="/">
                                <img className="w-44" src={logo} alt="logo" />
                                {/* <p className='text-2xl py-2'>Sneakies</p> */}
                            </Link>
                        </div>

                        <div className="grow grid grid-cols-2 items-center gap-3 xl:px-10">

                            <div className="">
                                <div className="relative">
                                    <input type="search" id="search" className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 focus:ring-[#B0A11A] focus:border-[#B0A11A]" placeholder="Search"></input>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 justify-between text-center uppercase font-medium xl:px-5">
                                <div id={Constants.MEN_MENU} onMouseOver={(e) => onMenuMouseEnter(e.target.id)} onMouseOut={() => onMenuMouseLeave()} className="flex justify-center items-center py-7 border-b-2 border-transparent hover:border-[#B0A11A]">
                                    Men
                                </div>
                                <div id={Constants.KIDS_MENU} onMouseOver={(e) => onMenuMouseEnter(e.target.id)} onMouseOut={() => onMenuMouseLeave()} className="flex justify-center items-center py-7 border-b-2 border-transparent hover:border-[#B0A11A]">
                                    Kids
                                </div>
                                <div id={Constants.WOMAN_MENU} onMouseOver={(e) => onMenuMouseEnter(e.target.id)} onMouseOut={() => onMenuMouseLeave()} className="flex justify-center items-center py-7 border-b-2 border-transparent hover:border-[#B0A11A]">
                                    Woman
                                </div>
                                <div className="flex justify-center items-center py-7 border-b-2 border-transparent hover:border-[#B0A11A]">
                                    Sale
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center divide-x">

                            <div className="flex justify-around px-2">

                                <div className="flex items-center px-2">
                                    <div className=""><i className="fas fa-user"></i></div>
                                    {/* <p className="w-full p-2">Login</p> */}
                                </div>
                            </div>
                            <div className="flex gap-2 h-full px-2">
                                <div className=" h-10 w-10 p-2 text-center hover:bg-slate-200 rounded-lg">
                                    <div className="relative">
                                        <i className="fas fa-shopping-cart fa-lg"></i>
                                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[9px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 text-center -right-2 dark:border-gray-900">20</div>
                                    </div>
                                </div>
                                <div className=" h-10 w-10  p-2 text-center hover:bg-slate-200 rounded-lg">
                                    <div className="relative">
                                        <i className="fas fa-bell fa-lg"></i>
                                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[9px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="peer/men">test</div> */}
                <div id={Constants.MEN_MENU + `_mega`} className={ isShown.hoverMenu !== Constants.MEN_MENU  ? `hidden` : `fixed left-0 right-0 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600`} onMouseOver={() => onMenuMouseEnter(Constants.MEN_MENU)} onMouseOut={() => onMenuMouseLeave()}>
                    <div className="grid max-w-screen-xl px-4 pt-10 pb-20 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Shoes</p>
                            <Link to="/shoes" className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">All Shoes</span> </Link>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Running</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Lifestyle</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Sandals</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Basketball</span></p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Clothing</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">All Clothing</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Tops</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Bottoms</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Outwear</span></p>
                            {/* <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Basketball</span></p> */}
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Accessories</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Hats/Caps</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Socks</span></p>
                        </div>

                    </div>
                </div>
                <div id={Constants.KIDS_MENU + `_mega`} className={ isShown.hoverMenu !== Constants.KIDS_MENU  ? `hidden` : `fixed left-0 right-0 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600`} onMouseOver={() => onMenuMouseEnter(Constants.MEN_MENU)} onMouseOut={() => onMenuMouseLeave()}>
                    <div className="grid max-w-screen-xl px-4 pt-10 pb-20 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Shoes</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">All Shoes</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Running</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Lifestyle</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Sandals</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Basketball</span></p>
                        </div>
                        {/* <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Clothing</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">All Clothing</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Tops</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Bottoms</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Outwear</span></p>

                        </div> */}
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Accessories</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Hats/Caps</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Socks</span></p>
                        </div>

                    </div>
                </div>
                <div id={Constants.WOMAN_MENU + `_mega`} className={ isShown.hoverMenu !== Constants.WOMAN_MENU  ? `hidden` : `fixed left-0 right-0 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600`} onMouseOver={() => onMenuMouseEnter(Constants.MEN_MENU)} onMouseOut={() => onMenuMouseLeave()}>
                    <div className="grid max-w-screen-xl px-4 pt-10 pb-20 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Shoes</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">All Shoes</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Running</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Lifestyle</span></p>
                            {/* <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Sandals</span></p> */}
                            {/* <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Basketball</span></p> */}
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Clothing</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">All Clothing</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Tops</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Bottoms</span></p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Outwear</span></p>
                            {/* <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Basketball</span></p> */}
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="pb-5 font-bold">Accessories</p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Hats/Caps</span> </p>
                            <p className="text-sm"><span className="border-b border-transparent hover:border-[#B0A11A]">Socks</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
     );
}

export default Navbar;
