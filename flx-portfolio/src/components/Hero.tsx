'use client'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import Image from "next/image"
import { useState } from 'react'


const Hero = () => {
  // framerMotion magic starts here
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0})
  const [mouseMove, setMouseMove] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  // get the windowsize inner of the client and start the setMouseMove true
  const handleMouseEnter = () => {
    setWindowOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight })
    setMouseMove(true)
  }

  const { innerWidth, innerHeight } = windowOffset

  // useSpring from FramerMotion
  const xSpring = useSpring(x, {stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, {stiffness: 100, damping: 10 })


  // if the mouse moves on the y axis: we transform from -30degrees to + 30degrees -> Tilt effect
  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  // if the mouse moves on the x axis: we transform from 10degrees to -10 degrees -> horizontal effect
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])


  return (
      <div className="h-screen grid, place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
          <div>
              <div className='flex flex-col items-center justify-center  gap-y-3 font-light capitalize'>
                  <motion.div className='flex item-center justify-center' style={{
                    rotateX: mouseMove ? rotateX : 0,
                    rotateY: mouseMove ? rotateY : 0,
                    transition: '0.1s'
                  }}>
                      <Image 
                        // src={'/person.png'} 
                        src={'/me_test.png'} 
                        alt='me' width={400} 
                        height={400} 
                        priority={true}
                        className='h-auto w-[150px]'
                        />
                      <span className="absolute text-3xl, font-semibold text-white">Hi There 👋</span>
                  </motion.div>
                  <h1 className='text-center text-3xl font-bold tracking-wider text-gray-600'>My Name is Felix 😊</h1>
                  <p className='text-lg tracking-wider text-gray-700'>I like Animations..</p>
              </div>
              <div>
               <a href='#' className='mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-800 transition-colors'>my Projects</a>
              </div>
              <a href='#' className='mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-800 transition-colors'>Contact me</a>
          </div>
      </div>
  )
}

export default Hero
