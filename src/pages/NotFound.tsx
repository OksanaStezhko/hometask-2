import Container from '../components/Container'
import Title from '../components/Title'

const NotFound = () => {
  return (
    <Container>
      <Title text={'Error!'} type={'error'} />
      <p>Page not found!</p>
    </Container>
  )
}

export default NotFound
