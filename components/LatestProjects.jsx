'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import Image1 from '@assets/images/projects/1.png'
import Image2 from '@assets/images/projects/2.png'
import Image3 from '@assets/images/projects/3.png'
import Image4 from '@assets/images/projects/4.png'
import Image5 from '@assets/images/projects/5.png'

const projectsSlides = [
    {
        image: Image1,
        title: 'ToothHQ-Dental',
        content: [
            'The ultimate goal of our Dental Implant Center Specialists is to make you feel comfortable and relaxed throughout your periodontal procedure. We are here to listen to your concerns and to help provide solutions leading to better oral health.',
            '“Outstanding Patient Satisfaction and Excellent Customer Service” is our motto.',
            'They say there is one way you can communicate in every language and that is with your smile. A smile says hello, it says you\'re happy and it shows compassion to the world. And that\'s what we do best, to improve and enhance your smile.'
        ],
        
    },
    {
        image: Image2,
        title: 'Grip Block',
        content: [
            'GRIPBlock™ is a NEW Cross Laminated Timber (CLT) block that boasts all the benefits of traditional CLT – lightweight, strong, renewable – enhanced with GRIPMetal\'s patented mechanical attachment technology that makes it faster and easier to build structures than ever before.',
            'Similar to CLT and concrete, GRIPBlock™ is a single block that can be placed precisely like a children\'s building brick.'
        ],
        
    },
    {
        image: Image3,
        title: 'Wobot',
        content: [
            'Cameras are everywhere. They watch our world pass by like silent, unblinking, witnesses.',
            'Imagine being able to harness the camera\'s real-time insights, and use them to their full potential?',
            'With no new equipment required, our solution is both effective and affordable, enabling us to satisfy a wide range of demands for the hospitality, retail, food-service, and other major industrial sectors.',
            'We\'re a passionate bunch working from all over the world to build the future of video intelligence. We have partnered with the best, all the while working with the best and building for the best.'
        ],
        
    },
    {
        image: Image4,
        title: 'NUCAP Energy',
        content: [
            `NUCAP Industries Inc. is a global innovation company headquartered in Toronto. Since 1994, NUCAP has been a leader in brake safety, having developed braking solutions with the world’s top brands in more than 90 countries.`,
            `NUCAP revolutionized the brake pad market by developing and introducing NUCAP Retention System (NRS) galvanized brake pads. The game-changing brake pads are built with award-winning NRS technology; the awarding judges noted that “NRS is a compelling example of an innovative solution to an unsatisfactory but accepted process in the automotive industry”.`
        ]
    },
    {
        image: Image5,
        title: 'GraphicsZoo',
        content: [
            `We are a team of like-minded individuals and entrepreneurs that had a similar problem, we had difficulty in getting quality graphic designs while saving money on a tight budget. For years, we noticed how our competitors always seemed to find ways to constantly update their branding and marketing materials, while we were stuck wasting way too much time going back and forth with multiple designers. We created GraphicsZoo out of our collective frustration and desire to help fill a need, the need for great quality creatives without having to risk and spend thousands of dollars. After extensive research and planning into what works best, GraphicsZoo was born.`
        ]
    }
]

const LatestProjects = () => {

    
    return (
        <div className='w-full bg-secondary-100 px-5 md:px-[10%] py-12 relative overflow-x-hidden'>
            <h3 className='text-secondary-300 opacity-10 font-bold text-8xl absolute top-10 right-10 uppercase md:left-[20%] md:ml-25 tracking-widest break-words -rotate-90 md:rotate-0'>
                Latest <wbr />Projects
            </h3>
            <h3 className='text-primary-200 font-bold text-[35pt] relative my-8'>
                Latest Work
            </h3>
            <div className='min-h-[50pt] w-full'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                {
                    projectsSlides.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className='text-gray-200 text-center shadow-lg my-3 pb-[30pt] px-[40pt] flex space-y-10 md:space-y-0 md:space-x-10 justify-between items-center flex-col md:flex-row'>
                                <div className='project-image overflow-y-auto w-full md:w-1/2 h-[200pt] md:h-[350pt]'>
                                    <Image src={project.image} alt="project 1" className='w-full' />
                                </div>

                                <div className='project-image overflow-y-auto w-full md:w-1/2 min-h-[300pt] text-left text-primary-200'>
                                    <h3 className='font-bold text-4xl md:text-5xl text-gray-800 pb-5'>{project.title}</h3>
                                    {
                                        project.content.map((paragraph, index) => (
                                            <p key={index} className='text-sm md:text-lg text-justify leading-loose py-3'>
                                                {paragraph}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}

export default LatestProjects