'use client'

import Heading from './sub/Heading'
import Image from 'next/image'
import { skillsData } from '@/app/assets'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center gap-y-20 px-96' id='skills'>
            <Heading headertext={'my Tools & Skills'} />
            <div className='w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6'>
                {skillsData.map((item, i) => (
                <motion.div 
                    key={i} 
                    className='flex item-center justify-center gap-x-3 rounded-xl border border-yellow-300 bg-transparent px-5 py-2 lg:px-2'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    viewport={{ margin: '50px', once: true }} // starting point smoother
                    whileHover={{ scale: 1.1 }}
                    >
                    <Image
                        src={item.icon}
                        alt={'skills image'}
                        width={100}
                        height={100}
                        className='h-auto, w-[50px]'
                    />
                    <span className='text-left py-2 text-amber-300 flex items-center' >{item.name}</span>
                </motion.div>
                ))}
            </div>
        </section>    
    )
}

export default Skills
