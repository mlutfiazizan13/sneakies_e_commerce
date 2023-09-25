import React from 'react';
import {Component, Fragment} from 'react';
import Product from '../container/ProductContainer';
import HomeCarousel from '../components/HomeCarousel';
import man from '../assets/image/man.jpg'
import kids from '../assets/image/kids.jpg'
import woman from '../assets/image/woman.jpg'
import BestProduct from '../container/BestProduct';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                
                <div className='px-5 lg:px-20 py-10'>
                    <div className='lg:h-80'>
                        <HomeCarousel/>
                    </div>
                    {/* <div className='h-80 bg-blue-600 rounded-2xl'>
                        


                    </div> */}


                    <div className='py-10'>
                        <Product></Product>
                    </div>
                    <div className='py-10'>
                        <div className="flex items-end uppercase mb-10">
                            <p className='text-2xl text-[#B0A11A] font-medium'>category</p>
                        </div>
                        <div className='grid grid-cols-3 gap-3'>
                            <div className='relative'>
                                <img src={man} alt="" className='w-full h-full' />

                                <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <a href="/" className=' bg-black py-3 px-20 text-white opacity-80 hover:opacity-100'>Men</a>
                                </div>
                            </div>
                            <div className='relative'>
                                <img src={kids} alt="" />
                                {/* <a href="/" className='absolute bottom-7 left-[-50%] bg-black p-2 text-white opacity-80 hover:opacity-100'>test</a> */}

                                <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <a href="/" className=' bg-black py-3 px-20 text-white opacity-80 hover:opacity-100'>Kids</a>
                                </div>
                            </div>
                            <div className='relative'>
                                <img src={woman} alt="" />
                                {/* <a href="/" className='absolute bottom-7 left-[-50%] bg-black p-2 text-white opacity-80 hover:opacity-100'>test</a> */}

                                <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <a href="/" className=' bg-black py-3 px-20 text-white opacity-80 hover:opacity-100'>Woman</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-10 bg-gray-300'>
                        <div className="flex items-end uppercase mb-10">
                            <p className='text-2xl text-[#B0A11A] font-medium'>best product</p>
                        </div>
                        <BestProduct/>

                    </div>

                </div>  
                {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            </Fragment>
        );
    }
}
 
export default Home;