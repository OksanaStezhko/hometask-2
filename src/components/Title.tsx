interface IProps {
  text: string
  type?: 'error'
}

const Title: React.FC<IProps> = ({ text, type }) => {
  return (
    <h1
      className={`text-2xl uppercase mb-2.5 font-semibold ${
        type === 'error' ? ' text-red-600' : ' text-black'
      }`}
    >
      {text}
    </h1>
  )
}

export default Title
