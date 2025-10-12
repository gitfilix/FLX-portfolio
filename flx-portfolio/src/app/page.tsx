// lets force-render that all client side 
'use client'
import Navbar from '@/components/Navbar'
import Hero from "@/components/Hero"
import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Questions from '@/components/Questions'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState , useRef } from 'react'


export default function Home() {
  // const [id, setId] = useState(0)
  // const componentRef = useRef(null)

  // aurora background effect magic fuckery: 
  // color Range changes value in the animation useEffect 
  const colorRange = ['#861236', '#1E67C6', '#AA335C', '#DD335C', '#322D56']
  const colorChange = useMotionValue(colorRange[0])
  const backgroundImage = useMotionTemplate`radial-gradient(100% 180% at 50% 0%, #010207 25%, ${colorChange})`

  // TODO: Bring this cool effects back
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
          <Navbar/>
          <div>
            <Hero />
            <AboutMe />
            <Education />
            <Skills />
            <Experience />
            <Questions />
          </div>
        </motion.div>
    </section>
  )
}


           {/* <div className='w-full p-6
                  sm:bg-amber-600 
                  md:bg-amber-900
                  lg:bg-blue-400
                  xl:bg-green-400'
                  >da sollte immer da sein zum testen</div> */}
