'use client'
import type { ReactNode } from 'react'
import { moonIcon, sunIcon } from '@/app/assets'
import { useState } from 'react'

type ToggleProps = {
  children?: ReactNode
}

function Toggle({ children }: ToggleProps) {
    const [darkTheme, setDarkTheme ] = useState(false)
  return (
    <main>
        <div className='bg-amber-950'>
            <div className='max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden'>
                <button className='fixed right-14 sm:right-10 top-10 text-yellow-200 hover:text-yellow-500'>
                    <span className='absolute block rounded-full text-2xl'>{moonIcon}</span>
                    <span className='absolute block rounded-full text-2xl'>{sunIcon}</span>
                </button>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Toggle
