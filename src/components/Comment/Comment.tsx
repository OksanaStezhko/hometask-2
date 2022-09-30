import classNames from 'classnames/bind'
import { useAppSelector } from '../../hook'
import styles from './Comment.module.css'
let cx = classNames.bind(styles)

const Comment = () => {
  const showArchivedNotes = useAppSelector((state) => state.showArchive.show)
  return (
    <span className={cx('comment', showArchivedNotes ? 'archived' : 'active')}>
      {showArchivedNotes ? 'List archived notes' : 'List active notes'}
    </span>
  )
}

export default Comment
