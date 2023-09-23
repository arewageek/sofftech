'use client'
import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'

export const Platforms = () => {

    const settings = {
        show: 6.5,
        slide: 2,
        infinity: true,
        transition: 0.5,
        swipeOn: 1
    }
    
    return (
        <div className='w-full px-5 md:px-[20%] py-12 relative overflow-x-hidden'>
            <h3 className='text-secondary-200 font-bold text-8xl absolute top-10 left-2 uppercase md:left-[20%] md:ml-25 tracking-widest break-words'>
                Plat<wbr />forms
            </h3>
            <h3 className='text-primary-200 font-bold text-[35pt] relative my-8'>
                Platforms we work with
            </h3>
            <div className='h-[50pt] w-[90%]'>
                <Carousel {...settings}>
                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        First Logo
                    </div>

                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        Second Logo
                    </div>

                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        Third Logo
                    </div>

                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        Fourth Logo
                    </div>  

                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        Fourth Logo
                    </div>  

                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        Fourth Logo
                    </div>  

                    <div className='bg-primary-200 text-gray-200 text-center shadow-lg m-3 p-4'>
                        Fourth Logo
                    </div>  
                </Carousel>
            </div>
        </div>
    )
}
