import parse from 'html-react-parser'
const images = {
  Task: '<i class="fa-solid fa-list button-categories"></i>',
  'Random Thought': '<i class="fa-solid fa-atom button-categories"></i>',
  Idea: '<i class="fa-solid fa-lightbulb button-categories"></i>',
  Quote: '<i class="fa-solid fa-quote-left button-categories"></i>',
  edit: `<i class='fa-solid fa-pencil'style="color: inherit "></i>`,
  delete: ` <i class='fa-solid fa-trash-can ' style="color: black"></i>`,
  deleteAll: ` <i class='fa-solid fa-trash-can'></i>`,
  toggleArchive: ` <i class='fa-solid fa-box-archive'  style="color: black"></i>`,
  toggleShow: ` <i class='fa-solid fa-box-archive' ></i>`,
}

type TProps = {
  name: keyof typeof images
}

const ImageButton = ({ name }: TProps): JSX.Element => {
  return <>{parse(images[name])}</>
}

export default ImageButton
