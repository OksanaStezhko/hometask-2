import { TColumnsNote, TColumnsSummary } from '../type'
export const categories = {
  Task: 'Task',
  Idea: 'Idea',
  Quote: 'Quote',
  'Random Thought': 'Random Thought',
}
export const categoryImages = {
  [categories.Task]: '<i class="fa-solid fa-list button-categories"></i>',
  [categories['Random Thought']]:
    '<i class="fa-solid fa-atom button-categories"></i>',
  [categories.Idea]: '<i class="fa-solid fa-lightbulb button-categories"></i>',
  [categories.Quote]:
    '<i class="fa-solid fa-quote-left button-categories"></i>',
}

export const buttonImages = {
  edit: `<i class='fa-solid fa-pencil'style="color: inherit "></i>`,
  delete: ` <i class='fa-solid fa-trash-can ' style="color: black"></i>`,
  deleteAll: ` <i class='fa-solid fa-trash-can'></i>`,
  toggleArchive: ` <i class='fa-solid fa-box-archive'  style="color: black"></i>`,
  toggleShow: ` <i class='fa-solid fa-box-archive' ></i>`,
}
export const schemeNotes: TColumnsNote[] = [
  { name: 'image', view: '', width: 'small' },
  { name: 'name', view: 'Name', width: 'large' },
  { name: 'created', view: 'Created', width: 'middle' },
  { name: 'category', view: 'Category', width: 'large' },
  { name: 'content', view: 'Content', width: 'grow' },
  { name: 'dates', view: 'Dates', width: 'grow' },
]

export const schemeSummary: TColumnsSummary[] = [
  { name: 'image', view: '', width: 'small' },
  { name: 'category', view: 'Note Category', width: 'large' },
  { name: 'active', view: 'Active', width: 'middle' },
  { name: 'archived', view: 'Archived', width: 'middle' },
]
