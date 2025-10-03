'use client'
import Hero from "@/components/Hero"
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { useEffect } from 'react'


export default function Home() {
  // aurora background effect magic fuckery: 
  // color Range changes value in the animation useEffect 
  const colorRange = ['#12dFAA', '#1E67C6', '#AA335C', '#DD335C']
  const colorChange = useMotionValue(colorRange[0])
  const backgroundImage = useMotionTemplate`radial-gradient(100% 180% at 50% 0%, #020217 25%, ${colorChange})`

  useEffect(() => {
    animate(colorChange, colorRange, {
      ease: 'easeInOut',
      duration: 12,
      repeat: Infinity,
      repeatType: 'mirror'
    }
    )
  }, [])


  return (
    <section>
      <motion.div
      style={{
         backgroundImage
      }}
      className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 text-gray-200'
      >
        test page
        <Hero />
      </motion.div>
    </section>
  )
}
