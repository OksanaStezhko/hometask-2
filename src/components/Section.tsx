interface IProps {
  children: JSX.Element[] | JSX.Element
  width?: 'full'
  height?: 'stretch'
}

const Section = ({ children, width, height }: IProps) => {
  return (
    <section
      className={`p-2.5 bg-white rounded shadow-section ${
        width === 'full' ? ' w-full ' : 'w-auto '
      } ${height === 'stretch' ? ' grow ' : ' grow-0 '}`}
    >
      {children}
    </section>
  )
}

export default Section
