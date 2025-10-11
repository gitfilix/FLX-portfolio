'use client'
import Image from 'next/image'
import Heading from './sub/Heading'
import { educationData, downloadIcon } from '@/app/assets'
import { motion, useMotionValue } from 'framer-motion'


const Education = () => {

    return (
        <section className='py-20 px-96 relative' id='education'>
            <Heading headertext={'Education: Ausbildung'} />
            {/* <div className='w-full
                 xs:bg-amber-200 
                 sm:bg-amber-600 
                 md:bg-amber-900
                 lg:bg-blue-400
                 xl:bg-green-400'>da sollte immer da sein zum testen</div> */}
            <Image
                src={'/experience.jpg'}
                alt={'change this ugly image'}
                width={400}
                height={400}
                className='absolute -top-4 right-96 opacity-70 xs:hidden lg:block'
            />
            <div className='w-full h-full flex flex-col items-center justify-center gap-y-10 py-10 lg:gap-y20'>
                {educationData.map((data, i) => (
                    <motion.div
                        key={`id-${i}`} 
                        className='w-[600px] px-12 relative'
                        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration:  0.8, type: 'spring', stiffness: 50 }}
                        >
                    <div className='relative flex flex-col gay-y-3 rounded-md border border-gray-200 bg-transparent p-4 tracking-wide sm:text-sm'>
                        <div className='text-gray-200 absolute top-0 -left-20 rounded-full border aspect-square grid place-items-center w-16'>
                            <span className='block text-sm'>{data.year}</span>
                            {data.year2 && (
                                <>
                                    {/* <span className="block text-xs">-</span> */}
                                    <span className="block text-sm">{data.year2}</span>
                                </>
                            )}
                        </div>
                        <h1 className='text-xl sm:text-lg font-light text-gray-200'>{data.title}</h1>
                        <p className=''>
                            <span className='block font-light'>Ausbildung:</span>
                            <span className='block pl-2 font-extralight'>{data.educationTitle}</span>
                        </p>
                        <div className='text-gray-200'>
                            <span className='font-light'>Gelerntes:</span>
                            <ul className='pl-2'>
                                {data.learnedSkills.map((skills, index) => (
                                    <li key={index}
                                        className='m-1 font-extralight'>{skills}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Education
