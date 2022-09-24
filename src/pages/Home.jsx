import { useState } from 'react'
import Container from '../components/Container'
import Section from '../components/Sections'
import Button from '../components/Button'
import Table from '../components/Table'
import { useSelector } from 'react-redux'
import { sumNotes, formattedNotes } from '../tools/utils'
import { schemeNotes, schemeNoteButtons, schemeNotesHeaderButtons } from '../schemes/schemaNotes'
import { schemeSummary, schemeSummaryButtons, schemeSummaryHeaderButtons } from '../schemes/schemaSummary'

const Home = () => {
  const [showArchive, setShowArchive] = useState(false)
  const notes = useSelector((state) => state.notes.notes)
  const filteredArray = notes.filter((elem) => elem.archived === showArchive)
  const formattedArray = formattedNotes(filteredArray)
  const summary = sumNotes(filteredArray)

  return (
    <Container>
        <Section>
        <Table data={formattedArray} schemeRow={schemeNotes}  schemeHeaderButtons={schemeNotesHeaderButtons} schemeRowButtons={schemeNoteButtons} />
      </Section>
      <Button />
      <Section>

      <Table data={summary} schemeRow={schemeSummary}  schemeHeaderButtons={schemeSummaryHeaderButtons} schemeRowButtons={schemeSummaryButtons} />
      </Section>
    </Container>
  )
}

export default Home
