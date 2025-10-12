'use client'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import Image from "next/image"
import { useState } from 'react'


const Hero = () => {
  // framerMotion magic starts here
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0})
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: { clientX: any; clientY: any }) => {
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
    <section
      id="hero"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s',
            }}
          >
            <Image
              src={'/felix_400_alpha.png'}
              alt="Felix the Hero Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi There 👋 !
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            Hallo, ich bin Felix
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            Ein Frontend -Dude mit 😎  
          </p>
        </motion.div>
        <div>
          <a href='#' className='mt-7 block w-max rounded-lg bg-transparent border-1 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-800 transition-colors'
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

