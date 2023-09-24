import React from 'react'
import Image from 'next/image'

import S1 from '@assets/images/services/s2.png'
import S2 from '@assets/images/services/1.png'
import S3 from '@assets/images/services/s3.png'
import S4 from '@assets/images/services/s4.png'
import S5 from '@assets/images/services/s5.png'
import S6 from '@assets/images/services/s6.png'
import S7 from '@assets/images/services/s7.png'
import S8 from '@assets/images/services/s8.png'

const services = [
    {
        icon: S1,
        title: 'Machine Learning/AI',
        
    },
    {
        icon: S2,
        title: 'Solution & ERP Design'
    },
    {
        icon: S3,
        title: 'UI/UX Design'
    },
    {
        icon: S4,
        title: 'Data Visualization'
    },
    {
        icon: S5,
        title: 'IoT & Cloud Services'
    },
    {
        icon: S6,
        title: 'Devops',
    },
    {
        icon: S7,
        title: 'Custom Software Development'
    },
    {
        icon: S8,
        title: 'E-Commerce Development'
    }
    
]

export const Services = () => {

    
    return (
        <div className='w-full px-5 md:px-[10%] py-12 relative overflow-x-hidden'>
            <h3 className='text-primary-200 opacity-20 font-bold text-8xl absolute top-10 right-10 uppercase md:left-[20%] md:ml-25 tracking-widest break-words -rotate-90 md:rotate-0 -z-10'>
                Services
            </h3>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary-200 font-bold text-[35pt] relative my-8'>
                    What Do We Offer?
                </h3>
                <button className='cta-gradient'>
                    All Services
                </button>
            </div>
            <div className='min-h-[50pt] w-full flex justify-between items-center flex-row flex-wrap'>
                {
                    services.map((service, index) => (
                        <div key={index} className={`h-auto w-1/2 md:w-1/4 p-5 ${(index%2) ? 'mt-0' : 'md:mt-[30pt]'}`}>
                            <div className='service-card rounded-3xl shadow-lg px-5 py-5 bg-secondary-300 w-full h-full flex flex-col justify-center items-center'>
                                <div className=''>
                                    <Image src={service.icon} alt={service.title} className='w-[120pt] h-auto' />
                                </div>
                                <div className='text-center font-bold text-sm md:text-lg'>
                                    {service.title}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}