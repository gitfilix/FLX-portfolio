
type Props = {
    headertext: string
}

const Heading = ({ headertext }: Props) => {
    return (
        <h2 className='text-3xl sm:text-2xl font-bold, text-gray-200 mb-14 self-start'>{headertext}</h2>
    )
}

export default Heading
