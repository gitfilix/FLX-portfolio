'use client'

import Heading from './sub/Heading'
import Achievements from './sub/Achievements'
import Image from 'next/image'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/app/assets'


const AboutMe = () => {
    return (
        <div className='min-h-screen px-96 flex flex-col items-center justify-center' id='aboutme'>
            <Heading headertext={'About Me'}/>
            <div className='w-full flex items-center justify-between md:justify-center'>
                <Image
                    src={'/felix_retrofuture_400.jpg'}
                    alt='me'
                    width={400}
                    height={200}
                    // className='w-[300px] lg:w-[200px] md:hidden'
                    className='w-[300px] lg:w-[200px]'
                />
                <div className="relative max-w-[800px] rounded-xl bg-transparent p-5 text-justify  transition-colors ">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-lg font-light text-gray-200 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white">
                        {aboutText}
                    </p>
                    {/* <a
                        href="/my-cv.pdf"
                        download=""
                        className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-red-500 bg-amber-500 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
                    >
                        <span>Download CV</span>
                        <span className="text-sm">{downloadIcon}</span>
                    </a> */}
                </div>
            </div>
            
            <h3 className='font-light'>Things done in this Year</h3>
            <div className='mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10'>
                {aboutData.map((item, i) => (
                    <Achievements key={i} title={item.title} amount={item.amount} >
                        {item.icon}
                    </Achievements>
                ))}
            </div>
        </div>
    )
}

export default AboutMe
