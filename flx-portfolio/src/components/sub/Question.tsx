'use client'
import { useState } from 'react'
import { questionArrow } from '../../app/assets'
import { easeOut, motion } from 'framer-motion'

type Props = {
    data: {
        question: String
        answer: String
    },
    index: number
}

const Question = ({ data, index } :Props) => {
    const [show, setShow] = useState(false)

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: {
            opacity: 0,
            x: -70

        }
    }

    return (
        <motion.li 
            className='border border-amber-400 p-1 rounded-lg'
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{
                margin: '50px',
                once: true
            }}
            variants={variants}
            >
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
                className='pl-8 my-3 text-lg font-extralight tracking-wide text-yellow-300 first-letter:pl-3'
                initial={{ 
                    scaleY: 0,
                    height: 0,
                    opacity: 0
                 }}
                animate={{
                    scaleY: show ? 1 : 0,
                    height: show ? 'auto' : 0,
                    opacity: show ? 1 : 0,
                }}
                transition={{
                    duration: 0.1,
                    type: 'spring',
                    stiffness: show ? 250 : 50,
                    opacity: { delay: show ? 0.1 : 0}
                }}
                >{data.answer}</motion.p>
        </motion.li>
    )
}


export default Question
