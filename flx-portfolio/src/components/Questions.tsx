'use Client'
import Heading from './sub/Heading'
import Question from './sub/Question'
import { questions } from '@/app/assets'

const Questions = () => {
    return (
        <div className='py-20 px-96'>
            <Heading headertext={'Fragen & Antworten'} />
            <div>
                <ul className='flex flex-col gap-y-3'>
                    {questions.map((question, i) => (
                        <Question key={i} data={question} index={i} />

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Questions
