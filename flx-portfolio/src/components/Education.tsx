'use client'
import Image from 'next/image'
import Heading from './sub/Heading'
import { educationData, downloadIcon } from '@/app/assets'
import { motion } from 'framer-motion'


const Education = () => {

    return (
        <section className='py-20 relative' id='education'>
            <Heading headertext={'Education: Ausbildung'} />
            <Image
                src={'/experience.jpg'}
                alt={'decorative experience image'}
                width={400}
                height={400}
                className='hidden lg:block absolute -top-4 lg:right-24 xl:right-96 opacity-70'
            />
            <div>
                <ul className='flex flex-col gap-y-3'>
                    {educationData.map((data, i) => (
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
                                <span className='block font-light'>Ausbildung:</span>
                                <span className='block pl-2 font-extralight text-gray-300'>{data.educationTitle}</span>
                            </p>
                            <div className='text-gray-300 text-sm sm:text-base'>
                                <span className='font-light'>Gelerntes:</span>
                                <ul className='pl-4 mt-1'>
                                    {data.learnedSkills.map((skills, index) => (
                                        <li key={index} className='my-1 font-extralight text-sm'>{skills}</li>
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

export default Education
