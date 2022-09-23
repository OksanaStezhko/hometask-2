import Container  from '../components/Container'
import Section from '../components/Sections'
import Button from '../components/Button'
import List from '../components/List'
import {useSelector} from 'react-redux'


const  Home = ()=> {
  const notes = useSelector(state=>state.notes.notes);

  return (
    <Container>
      <Section>
        <List dataArray = {notes}/>
      </Section>
      <Button></Button>
      <Section>
        {/* <List dataArray = {[]}/> */}
      </Section>
    </Container>
  )
}

export default Home