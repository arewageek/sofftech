'use client'
import React from 'react'
import Banner from '@assets/images/banner.png'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { animated } from '@react-spring/web'

export const Header = () => {
  return (
    <div className='w-full md:flex justify-around items-center bg-primary-300  py-24 px-10 md:p-[100pt] text-primary-200'>
        <div className='text-left p-0 md:p-5 w-full md:w-1/2 '>
          <h3 className='font-bold text-4xl md:text-6xl leading-snug w-full'>
            <TypeAnimation
              sequence={[
                'Observe and Create Things',
                3000,
                'Exceptional Ideas',
                3000,
                'Our Experienced Team',
                3000
              ]}
              wrapper='div'
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <h4 className='font-thin text-4xl md:text-5xl my-3 hero-span'>
            
            <TypeAnimation
              sequence={[
                'a little uniquely',
                3000,
                'end-to-end support and expert guidance',
                3000,
                'delivers extraordinary outcomes',
                3000
              ]}
              wrapper='div'
              speed={50}
              repeat={Infinity}
            />
          </h4>
          <p className='text-lg'>
            Web Design, Web Development, App Development, Graphic Designing
          </p>
          <button className='mt-5 cta-gradient'>
            <div>
              <span>
                Get a Quote 
              </span>
              <span className='text-2xl ml-3'>&rarr;</span>
            </div>
          </button>
        </div>

        <div className='text-left p-5 w-full md:w-1/2 hidden md:block'>
          <Image src={Banner} alt="Image for Hero Section" />
        </div>
    </div>
  )
}
