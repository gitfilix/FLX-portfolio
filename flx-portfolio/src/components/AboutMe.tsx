'use client'

import Heading from './sub/Heading'
import Achievements from './sub/Achievements'
import Image from 'next/image'
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from '@/app/assets'


const AboutMe = () => {
    return (
        <section
            className='py-20 px-6 sm:px-20 md:px-96 relative'
            id='aboutme'
        >
        <Heading headertext={'About Me'}/>
            <div className='w-full max-w-6xl mx-auto flex flex-col md:flex-row px-4 md:px-6 items-center md:items-start justify-between gap-8 md:gap-12'>
                <Image
                    src={'/felix_retrofuture_400.jpg'}
                    alt='me'
                    width={400}
                    height={573}
                    className='w-[150px] sm:w-[250px] md:w-72 lg:w-80 h-auto rounded-lg'
                />
                <div className="px-4 sm:px-6 md:max-w-[800px] bg-transparent text-justify transition-colors max-w-full">
                    <p className="text-base md:text-lg lg:text-xl text-amber-200 first-letter:pl-3 break-words whitespace-normal">
                        {aboutText}
                    </p>
                    <a
                     href="/Lebenslauf_Felix_Adam_2025.pdf"
                     download="Lebenslauf_Felix_Adam_2025.pdf"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-red-500 bg-amber-500 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
                    >
                        <span>Download Lebenslauf</span>
                        <span className="text-sm">{downloadIcon}</span>
                    </a>
                </div>
            </div>
            
            <h3 className='text-2xl mt-8'>Things done in this Year</h3>
            <div className='mt-20 w-full flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-x-7 gap-y-8'>
                {aboutData.map((item, i) => (
                    <div key={i} className='w-full sm:w-[30%]'>
                        <Achievements title={item.title} amount={item.amount}>
                            {item.icon}
                        </Achievements>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutMe
