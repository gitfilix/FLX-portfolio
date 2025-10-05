'use client'

import Heading from './sub/Heading'
import Image from 'next/image'
import { skillsData } from '@/app/assets'

const Skills = () => {
    
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-y-20 px-96'>
            <Heading headertext={'my Tools & Skills'} />
            <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6'>
                {skillsData.map((item, i) => (
                <div key={i} className='flex item-center justify-center gap-x-3 rounded-xl border border-yellow-300  bg-amber-400 px-5 py-2 lg:px-2'>
                    <Image
                        src={item.icon}
                        alt={'skills image'}
                        width={100}
                        height={100}
                        className='h-auto, w-[50px]'
                    />
                    <caption className='text-left py-2 text-gray-600 ' >{item.name}</caption>
                </div>
                ))}
            </div>
        </div>    
    )
}

export default Skills
