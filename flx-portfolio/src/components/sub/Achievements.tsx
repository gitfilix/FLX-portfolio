import { JSXSource } from 'react/jsx-dev-runtime'

type Props = {
    title: string
    amount: number
    children: React.ReactNode
}

const Achievements = ({ title, amount, children }: Props) => {
    return (
        <div className='flex item-end gap-x-3'>
            <span className='text-4xl lg:text-2xl text-gray-100'>{children}</span>
            <h3 className='flex flex-col gap-y-2'>
                <span className='text-2xl lg:text-xl font-light text-gray-100'>{amount}</span>
                <span className='text-sm tracking-wide text-gray-200'>{title}</span>
            </h3>
        </div>
    )
}

export default Achievements
