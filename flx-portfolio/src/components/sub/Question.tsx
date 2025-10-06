'use client'
import { useState } from 'react'
import { questionArrow } from '../../app/assets'
import { motion } from 'framer-motion'

type Props = {
    data: {
        question: String
        answer: String
    },
    index: Number
}

const Question = ({ data, index } :Props) => {
    const [show, setShow] = useState(false)

    return (
        <li className='border border-amber-400 p-1 rounded-lg'>
            <h2 
                className={`flex items-center text-gray-300 text-xl font-extralight hover:text-yellow-300 tracking-wide cursor-pointer ${show && "border-b text-yellow-600"}`}
                onClick={() => setShow(!show)}
                >
                <motion.span
                    animate={{ rotate: show ? 180: 0 }}
                >{questionArrow}</motion.span>
                <span>{data.question}</span>
            </h2>
            <motion.p 
                className='pl-8 pt-3 text-lg font-extralight tracking-wide text-yellow-300 first-letter:pl-3'
                initial={{ 
                    scaleY: 0,
                    height: 0,
                    opacity: 0
                 }}
                animate={{
                    scaleY: show ? 1 : 0,
                    height: show ? 'auto' : 0,
                    opacity: show ? 1 : 0
                }}
                >{data.answer}</motion.p>
        </li>
    )
}


export default Question
