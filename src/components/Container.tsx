interface IProps {
  children: JSX.Element[]
}

const Container = ({ children }: IProps) => {
  return (
    <div
      className={
        'container mx-auto px-8 py-5 bg-regal-blue flex flex-col items-center  min-h-screen'
      }
    >
      {children}
    </div>
  )
}

export default Container
