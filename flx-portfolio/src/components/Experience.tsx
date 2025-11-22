'use client'
import Image from 'next/image'
import Heading from './sub/Heading'
import { experienceData, downloadIcon } from '@/app/assets'
import { motion } from 'framer-motion'


const Experience = () => {

    return (
        <section className='py-20 px-96 relative' id='experience'>
            <Heading headertext={'Erfahrung - Arbeit'} />
            {/* <div className='w-full
                 xs:bg-amber-200 
                 sm:bg-amber-600 
                 md:bg-amber-900
                 lg:bg-blue-400
                 xl:bg-green-400'>da sollte immer da sein zum testen</div> */}
            <Image
                src={'/experience.jpg'}
                alt={'decorative experience image'}
                width={400}
                height={400}
                className='hidden lg:block absolute -top-4 lg:right-24 xl:right-96 opacity-70'
            />
            <div>
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
                            <h1 className='text-lg sm:text-xl font-light text-gray-200 mb-2'>{data.title}</h1>
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
