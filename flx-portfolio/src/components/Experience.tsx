'use client'
import Image from 'next/image'
import Heading from './sub/Heading'
import { experienceData, downloadIcon } from '@/app/assets'
import { motion } from 'framer-motion'


const Experience = () => {

    return (
        <section className='py-20 px-96 relative' id='experience'>
            <Heading headertext={'Erfahrung - Arbeit'} />
            <Image
                src={'/experience_3.jpg'}
                alt={'decorative experience image'}
                width={300}
                height={300}
                className='hidden lg:block absolute -top-4 lg:right-24 xl:right-96 opacity-80 rounded-3xl'
            />
            <div className='pt-32'>
                <ul className='flex flex-col gap-y-3'>
                    {experienceData.map((data, i) => (
                        <motion.li
                            key={`id-${i}`} 
                            className='border border-gray-200 p-4 rounded-md bg-transparent'
                            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration:  0.8, type: 'spring', stiffness: 50 }}
                            >
                            <h1 className='text-lg sm:text-xl font-light text-amber-200 mb-2'>{data.title}</h1>
                            <p className='text-sm sm:text-base mb-2'>
                                <span className='block font-light'>Firma:</span>
                                <span className='block pl-2 font-extralight text-gray-300'>{data.education}</span>
                            </p>
                            <div className='text-gray-300 text-sm sm:text-base'>
                                <span className='font-light'>Arbeitserfahrung:</span>
                                <ul className='pl-4 mt-1'>
                                    {data.experience.map((exp, index) => (
                                        <li key={index} className='my-1 font-extralight text-sm'>{exp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Experience
