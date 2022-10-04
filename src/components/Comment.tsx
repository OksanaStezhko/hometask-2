import { useAppSelector } from '../hook'

const Comment = () => {
  const showArchivedNotes = useAppSelector((state) => state.showArchive.show)
  return (
    <span
      className={`text-xl uppercase mb-5  font-medium  ${
        showArchivedNotes ? ' text-[#d23838]' : ' text-[#3838ad]'
      }`}
    >
      {showArchivedNotes ? 'List archived notes' : 'List active notes'}
    </span>
  )
}

export default Comment
