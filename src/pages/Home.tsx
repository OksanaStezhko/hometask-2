import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Section from '../components/Sections'
import Button from '../components/Button'
import Table from '../components/Table'
import Title from '../components/Title'
import { useAppDispatch, useAppSelector } from '../hook'
import {
  deleteNote,
  deleteAllNotes,
  toggleArchiveNote,
} from '../store/notesSlice'

import { toggleShowArchive } from '../store/showArchiveSlice'
import { sumNotes, formattedNotes } from '../tools/utils'
import {
  TFormattedData,
  TSummary,
  TActionsRow,
  TActionsHeader,
  TColumnsNote,
  TColumnsSummary,
} from '../type'

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

  const schemeNotes: TColumnsNote[] = [
    { name: 'image', view: '', width: 'small' },
    { name: 'name', view: 'Name', width: 'large' },
    { name: 'created', view: 'Created', width: 'middle' },
    { name: 'category', view: 'Category', width: 'large' },
    { name: 'content', view: 'Content', width: 'grow' },
    { name: 'dates', view: 'Dates', width: 'grow' },
  ]

  const schemeSummary: TColumnsSummary[] = [
    { name: 'image', view: '', width: 'small' },
    { name: 'category', view: 'Note Category', width: 'large' },
    { name: 'active', view: 'Active', width: 'middle' },
    { name: 'archived', view: 'Archived', width: 'middle' },
  ]

  return (
    <Container>
      <Title text={'Notes'} />
      <Section width="full" height="stretch">
        <Table
          options={{
            data: formattedArray,
            scheme: schemeNotes,
            actionsRow: actionsRowNote,
            actionsHeader: actionHeaderNote,
          }}
        />
      </Section>
      <Link to="/new">
        <Button />
      </Link>

      <Section>
        <Table options={{ data: summary, scheme: schemeSummary }} />
      </Section>
    </Container>
  )
}

export default Home
