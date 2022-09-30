import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Section from '../components/Sections'
import Button from '../components/Button'
import Table from '../components/Table'
import Title from '../components/Title'
import Comment from '../components/Comment'
import { useAppDispatch, useAppSelector } from '../hook'
import {
  deleteNote,
  deleteAllNotes,
  toggleArchiveNote,
} from '../store/notesSlice'

import { toggleShowArchive } from '../store/showArchiveSlice'
import { sumNotes, formattedNotes } from '../tools/utils'
import { TFormattedData, TSummary, TActionsRow, TActionsHeader } from '../type'

import { schemeNotes, schemeSummary, path } from '../tools/variables'

const Home = () => {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((state) => state.notes.notes)
  const showArchivedNotes = useAppSelector((state) => state.showArchive.show)

  const filteredArray = notes.filter(
    (elem) => elem.archived === showArchivedNotes
  )
  const formattedArray: TFormattedData[] = formattedNotes(filteredArray)

  const summary: TSummary[] = sumNotes(notes)

  const actionsRowNote: TActionsRow[] = [
    { name: 'edit' },
    { name: 'delete', action: (id: string) => dispatch(deleteNote(id)) },
    {
      name: 'toggleArchive',
      action: (id: string) => dispatch(toggleArchiveNote(id)),
    },
  ]

  const actionHeaderNote: TActionsHeader[] = [
    { name: 'toggleShow', action: () => dispatch(toggleShowArchive()) },
    { name: 'deleteAll', action: () => dispatch(deleteAllNotes()) },
  ]

  return (
    <Container>
      <Title text={'Notes'} />
      <Comment />
      <Section width="full" height="stretch">
        <Table
          data={formattedArray}
          scheme={schemeNotes}
          actionsRow={actionsRowNote}
          actionsHeader={actionHeaderNote}
        />
      </Section>
      <Link to={`${path}+new`}>
        <Button />
      </Link>

      <Section>
        <Table data={summary} scheme={schemeSummary} />
      </Section>
    </Container>
  )
}

export default Home
