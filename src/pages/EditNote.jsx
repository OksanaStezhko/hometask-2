import { useParams } from 'react-router-dom'
import Form from '../components/Form'
import Container from '../components/Container'
import Title from '../components/Title'
import { useSelector } from 'react-redux'

const EditNote = () => {
  const notes = useSelector((state) => state.notes.notes)
  const { id } = useParams()
  const editedNote = notes.find((elem) => elem.id === id)

  return (
    <Container>
      <Title text={'Edit note'} />
      <Form note={editedNote}></Form>
    </Container>
  )
}

export default EditNote
