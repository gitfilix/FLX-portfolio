'use client'
import { navbarData, copyRightIcon } from '@/app/assets'

const Navbar = () => {
       const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
       setTimeout(() => {
            const element = document.getElementById(id)
            if (element) {
                const offsetTop = element.offsetTop
                window.scrollTo({
                    top: offsetTop - 80, // Adjust offset if you have a fixed header
                    behavior: 'smooth'
                })
            }
        }, 100)
    }

    return (
        <div className='w-[80px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-30'>
            <a href='/#home'>
                <span className='test-2xl font-light text-2xl text-amber-200'>Felix</span>
                <span className='block w-max rotate-270 origin-bottom text-[26px] font-extralight tracking-widest'>Adam</span>
            </a>
            <div className='flex flex-col gap-y-3 sm:gap-y-2'>
            {navbarData.map((item, i) => (
                <a  href={`/#${item.id}`}
                    key={i} 
                    className='group flex flex-col items-center gap-y-2'
                    onClick={(e) => handleScroll(e, item.id)}
                    >
                    <span className='text-2xl text-yellow-600 group-hover:scale-125 transition-all'>{item.icon}</span>
                    <span className='
                        text-[10px] 
                        tracking-wide
                        -translate-x-2
                        opacity-0
                        group-hover:translate-x-0 
                        group-hover:opacity-100 
                        transition-all 
                        duration-200 
                        text-center'>{item.name}
                    </span>
                </a>
            ))}
            </div>
            <p className='flex items-center justify-center text-[14px] text-gray-400 mt-3'>
                <span className='absolute bottom-4 left-4 w-max flex items-center, rotate-270 origin-left'>FLX Portfolio - 2025</span>
            </p>
        </div>
    )
}

export default Navbar
