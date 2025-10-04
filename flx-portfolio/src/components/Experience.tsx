'use client'
import Image from 'next/image'
import Heading from './sub/Heading'


const Experience = () => {

    return (
        <div className='py-20 px-96 relative'>
            <Heading headertext={'Erfahrung & Ausbildung'} />
            {/* <div className='w-full
                 xs:bg-amber-200 
                 sm:bg-amber-600 
                 md:bg-amber-900
                 lg:bg-blue-400
                 xl:bg-green-400'>da sollte immer da sein zum testen</div> */}
            <Image
                src={'/education.png'}
                alt={'change this ugly image'}
                width={400}
                height={400}
                className='absolute -top-4 right-96 opacity-70 xs:hidden lg:block'
            />
            <div className='w-full h-full flex flex-col items-center justify-center gap-y-10 py-10 lg:gap-y20'>
                <div className='w-[600px] xl:w-[480px] md:w-full px-12 sm:px-0 relative -left-[300px]'>
                    <div className='relative flex flex-col gay-y-3 rounded-md border border-red-300 bg-transparent p-4 tracking-wide sm:text-sm'>
                        <h1 className='text-xl sm:text-lg font-light text-gray-200'>Foundation and Basics</h1>
                        <p className=''>
                            <span className='block font-light'>Education:</span>
                            <span className='block pl-2 font-extralight'>edu</span>
                        </p>
                        <div className='text-gray-200'>
                            <span className='font-light'>Experience:</span>
                            <ul className='pl-2'>
                                <li className='m-1 font-extralight'>exp</li>
                            </ul>
                        </div>
                        <span className='absolute top-20 left-full text-red-400'>icon</span>
                    </div>
                    <div className='w-14 absolute top-20 left-full border border-gray-800 rounded-full aspect-square grid place-items-center text-red-600 font-light'>
                        2020
                    </div>
                </div>
                <div className='absolute w-1 h-full rounded-full bg-gray-100'></div>
            </div>
        </div>
    )
}

export default Experience
