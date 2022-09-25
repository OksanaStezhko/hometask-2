import { useState } from 'react'
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
  addNote,
  editNote,
  deleteNote,
  deleteAllNotes,
  toggleArchiveNote,
} from '../store/notesSlice'

const Home = () => {
  const dispatch = useDispatch()
  const [toggleViewArchived, setToggleViewArchived] = useState(false)
  const notes = useSelector((state) => state.notes.notes)
  const filteredArray = notes.filter(
    (elem) => elem.archived === toggleViewArchived
  )
  const formattedArray = formattedNotes(filteredArray)
  const summary = sumNotes(notes)
  const actionsNotes = {
    [buttonNames.toggleView]: () => setToggleViewArchived(!toggleViewArchived),
    [buttonNames.deleteAll]: () => dispatch(deleteAllNotes()),
    [buttonNames.delete]: (id) => dispatch(deleteNote(id)),
    [buttonNames.toggleArchive]: (id) => dispatch(toggleArchiveNote(id)),
  }

  return (
    <Container>
      <Section>
        <Table
          data={formattedArray}
          schemes={schemesNotes}
          actions={actionsNotes}
        />
      </Section>
      <Link to="/note/new">
        <Button />
      </Link>

      <Section>
        <Table data={summary} schemes={schemesSummary} />
      </Section>
    </Container>
  )
}

export default Home
