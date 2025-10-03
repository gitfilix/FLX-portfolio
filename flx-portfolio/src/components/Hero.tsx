'use client'
import Image from "next/image"

const Hero = () => {
  return (
      <div className="h-screen grid, place-items-center">
          <div>
              <div className='flex flex-col items-center justify-center  gap-y-3 font-light capitalize'>
                  <div className='flex item-center justify-center'>
                      <Image 
                        src={'/person.png'} 
                        alt='me' width={400} 
                        height={400} 
                        priority={true}
                        className='h-auto w-[150px]'
                        />
                      <span className="absolute text-3xl, font-semibold text-white">Hi</span>
                  </div>
                  <h1 className='text-center text-3xl font-bold tracking-wider text-gray-600'>My Name is Felix 😊</h1>
                  <p className='text-lg tracking-wider text-gray-700'>I like Animations..</p>
              </div>
              <div>
                <a href='#'>Icon</a>
              </div>
              <a href='#' className='mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-800 transition-colors'>Talk to me</a>
          </div>
      </div>
  )
}

export default Hero
