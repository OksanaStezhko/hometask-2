import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Section from '../components/Sections'
import Button from '../components/Button'
import Table from '../components/Table'
import { useSelector } from 'react-redux'
import { sumNotes, formattedNotes } from '../tools/utils'
import { buttonNames } from '../tools/variables'
import * as schemesNotes from '../schemes/schemesNotes'
import * as schemesSummary from '../schemes/schemesSummary'
import { useDispatch } from 'react-redux'
import {
  deleteNote,
  deleteAllNotes,
  toggleArchiveNote,
} from '../store/notesSlice'

import { toggleShowArchive } from '../store/showArchive'

const Home = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes.notes)
  const showArchivedNotes = useSelector((state) => state.showArchive.show)

  const filteredArray = notes.filter(
    (elem) => elem.archived === showArchivedNotes
  )
  const formattedArray = formattedNotes(filteredArray)

  const summary = sumNotes(notes)

  const actionsNotes = {
    [buttonNames.toggleShow]: () => dispatch(toggleShowArchive()),

    [buttonNames.deleteAll]: () => dispatch(deleteAllNotes()),
    [buttonNames.delete]: (id) => dispatch(deleteNote(id)),
    [buttonNames.toggleArchive]: (id) => dispatch(toggleArchiveNote(id)),
  }

  return (
    <Container>
      <Section width={'full'} height={'stretch'}>
        <Table
          data={formattedArray}
          schemes={schemesNotes}
          actions={actionsNotes}
        />
      </Section>
      <Link to="/new">
        <Button />
      </Link>

      <Section>
        <Table data={summary} schemes={schemesSummary} />
      </Section>
    </Container>
  )
}

export default Home
