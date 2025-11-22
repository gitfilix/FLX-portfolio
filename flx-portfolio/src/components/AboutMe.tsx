'use client'

import Heading from './sub/Heading'
import Achievements from './sub/Achievements'
import Image from 'next/image'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/app/assets'


const AboutMe = () => {
    return (
        <div className='min-h-screen px-96 flex flex-col items-center justify-center' id='aboutme'>
            <Heading headertext={'About Me'}/>
            <div className='w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12'>
                <Image
                    src={'/felix_retrofuture_400.jpg'}
                    alt='me'
                    width={400}
                    height={400}
                    // className='w-[300px] lg:w-[200px] md:hidden'
                    // className='w-[300px] lg:w-[200px]'
                    className='w-40 sm:w-56 md:w-72 lg:w-80 h-auto rounded-lg'
                />
                <div className="w-full max-w-[800px] rounded-xl bg-transparent p-4 sm:p-6 md:p-8 text-justify transition-colors">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">
                        {arrowLeftIcon}
                    </span>
                    <p className="text-sm sm:text-base md:text-lg font-light text-gray-200 first-letter:pl-3 dark:text-white">
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
            
            <h3 className='font-light mt-8'>Things done in this Year</h3>
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
