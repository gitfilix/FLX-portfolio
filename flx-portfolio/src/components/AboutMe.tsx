'use client'

import Heading from './sub/Heading'
import Achievements from './sub/Achievements'
import Image from 'next/image'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/app/assets'


const AboutMe = () => {
    return (
        <section
            // className='py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-96 relative'
            className='py-8 px-80 relative"'
            id='aboutme'
        >
            {/* <div className='w-full max-w-6xl md:mx-auto ml-[70px] mr-[50px] md:ml-0 md:mr-0'> */}
            <div className=''>
                <Heading headertext={'About Me'}/>
                <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12'>
                    <Image
                        src={'/felix_retrofuture_400.jpg'}
                        alt='me'
                        width={400}
                        height={573}
                        className='w-[90px] sm:w-[150px] md:w-72 lg:w-80 h-auto rounded-lg flex-shrink-0'
                    />
                    <div className="bg-transparent sm:text-justify transition-colors flex-1 min-w-0 w-full md:w-auto max-w-sm sm:max-w-none">
                        <p className="sm:text-base md:text-base lg:text-lg text-amber-200 first-letter:pl-3 break-words whitespace-normal leading-relaxed">
                            {aboutText}
                        </p>
                        <a
                         href="/Lebenslauf_Felix_Adam_2025.pdf"
                         download="Lebenslauf_Felix_Adam_2025.pdf"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-red-500 bg-amber-500 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors text-xs sm:text-sm"
                        >
                            <span>Download Lebenslauf</span>
                            <span className="text-xs">{downloadIcon}</span>
                        </a>
                    </div>
                </div>
                <h3 className='w-full text-md sm:text-xl md:text-2xl mt-6 sm:mt-10 mb-6 sm:mb-10'>Things done</h3>
                <div className='w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-x-7 gap-y-6'>
                    {aboutData.map((item, i) => (
                        <div key={i} className='w-full sm:w-[30%]'>
                            <Achievements title={item.title} amount={item.amount}>
                                {item.icon}
                            </Achievements>
                        </div>
                    ))}
                </div>
            
            </div>
        </section>
    )
}

export default AboutMe
