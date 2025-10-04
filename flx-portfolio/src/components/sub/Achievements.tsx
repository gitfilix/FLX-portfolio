import { JSXSource } from 'react/jsx-dev-runtime'
import { motion, useMotionValue } from 'framer-motion'

type Props = {
    title: string
    amount: number
    children: React.ReactNode
}
// children are rendered icons from remixicon-react lib configured in index.tsx

const Achievements = ({ title, amount, children }: Props) => {
    const number = useMotionValue(30)

    // animate the ammount numbers 
    const count = (amount: number) => {
        let i = 0
        const updateCount = () => {
            let timeOut 
            if (i <= amount) {
                number.set(i++)
                timeOut = setTimeout(updateCount, 0)
            } else {
                clearTimeout(timeOut)
            }
        }
        updateCount()
    }

    return (
        <div className='flex item-end gap-x-3'>
            <span className='text-4xl lg:text-2xl text-gray-100'>{children}</span>
            <h3 className='flex flex-col gap-y-2'>
                <motion.span 
                    className='text-2xl lg:text-xl font-light text-gray-100'
                    onViewportEnter={() => count(amount)}
                    viewport={{once: true}}
                    >
                        {number}</motion.span>
                <motion.span className='text-sm tracking-wide text-gray-200'>{title}</motion.span>
            </h3>
        </div>
    )
}

export default Achievements
