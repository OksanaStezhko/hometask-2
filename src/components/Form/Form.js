import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { v4 as createID } from 'uuid'
import moment from 'moment'

import { editNote, addNote } from '../../store/notesSlice'
import classNames from 'classnames/bind'
import styles from './Form.module.css'

let cx = classNames.bind(styles)

const Form = ({
  note = {
    id: createID(),
    name: '',
    category: 'Task',
    content: '',
    created: moment().format('YYYY-MM-DD'),
  },
}) => {
  let location = useLocation().pathname.slice(1).split('/')[0]

  const idNote = note.id
  const [name, setName] = useState(note.name)
  const [created, setCreated] = useState(note.created)
  const [category, setCategory] = useState(note.category)
  const [content, setContent] = useState(note.content)

  const navigate = useNavigate()
  const goHome = () => navigate('/', { replace: true })

  const dispatch = useDispatch()
  const handleSubmit = (event) => {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <dir className={styles.data}>
        <label className={styles.label}>
          <span className={styles.labelName}>Name:</span>
          <textarea
            className={styles.input}
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          >
            {name}
          </textarea>
        </label>
        <label className={styles.label}>
          <span className={styles.labelName}> Created:</span>
          <input
            className={cx('input', 'date')}
            type="date"
            name="created"
            value={created}
            onChange={(event) => setCreated(event.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.labelName}> Category:</span>
          <select
            name="category"
            required
            className={styles.input}
            id="category-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
          </select>
        </label>
        <label className={styles.label}>
          <span className={styles.labelName}> Content:</span>
          <textarea
            className={styles.input}
            name="comment"
            rows="4"
            value={content}
            required
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </label>
      </dir>

      <dir className={styles.footer}>
        <button className={styles.button} type="button" onClick={goHome}>
          Back to notes
        </button>
        <button className={styles.button} type="submit">
          Save
        </button>
      </dir>
    </form>
  )
}

export default Form
