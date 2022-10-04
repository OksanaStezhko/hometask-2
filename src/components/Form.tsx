import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { v4 as createID } from 'uuid'
import moment from 'moment'

import { useAppDispatch } from '../hook'
import { editNote, addNote } from '../store/notesSlice'
import { categories, path } from '../tools/variables'

interface IProps {
  note?: {
    id: string
    name: string
    category: string
    content: string
    created: string
  }
}

const Form = ({
  note = {
    id: createID(),
    name: '',
    category: categories.Task,
    content: '',
    created: moment().format('YYYY-MM-DD'),
  },
}: IProps) => {
  let location = useLocation().pathname.slice(1).split('/')[1]

  const idNote = note.id
  const [name, setName] = useState(note.name)
  const [created, setCreated] = useState(note.created)
  const [category, setCategory] = useState(note.category)
  const [content, setContent] = useState(note.content)

  const navigate = useNavigate()
  const goHome = () => navigate(`${path}/`, { replace: true })

  const dispatch = useAppDispatch()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newNote = {
      id: idNote,
      name,
      created,
      category,
      content,
      archived: false,
    }

    if (location === 'new') {
      dispatch(addNote(newNote))
    }
    if (location === 'edit') {
      dispatch(editNote(newNote))
    }
    goHome()
  }
  return (
    <form
      className={
        'flex flex-col w-1/2 mx-auto p-3 bg-light-blue border border-white rounded shadow-form'
      }
      onSubmit={handleSubmit}
    >
      <div className={'flex flex-col   p-6 grow-0'}>
        <label className={'label'}>
          <span className={'labelName'}>Name:</span>
          <textarea
            className={'input'}
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          >
            {name}
          </textarea>
        </label>
        <label className={'label'}>
          <span className={'labelName'}> Created:</span>
          <input
            className={'input-date'}
            type="date"
            name="created"
            value={created}
            onChange={(event) => setCreated(event.target.value)}
            required
          />
        </label>
        <label className={'label'}>
          <span className={'labelName'}> Category:</span>
          <select
            name="category"
            required
            className={'input'}
            id="category-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Task">{categories.Task}</option>
            <option value="Random Thought">
              {categories['Random Thought']}
            </option>
            <option value="Idea">{categories.Idea}</option>
            <option value="Quote">{categories.Quote}</option>
          </select>
        </label>
        <label className={'label'}>
          <span className={'labelName'}> Content:</span>
          <textarea
            className={'input'}
            name="comment"
            rows={4}
            value={content}
            required
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </label>
      </div>

      <div className={'flex items-center justify-between p-2 w-4/5 mx-auto'}>
        <button className={'button'} type="button" onClick={goHome}>
          Back to notes
        </button>
        <button className={'button'} type="submit">
          Save
        </button>
      </div>
    </form>
  )
}

export default Form
