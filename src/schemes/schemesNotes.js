import { buttonNames } from '../tools/variables'

export const schemeData = [
  { name: 'image', view: '', width: 'small' },
  { name: 'name', view: 'Name', width: 'large' },
  { name: 'created', view: 'Created', width: 'middle' },
  { name: 'category', view: 'Category', width: 'large' },
  { name: 'content', view: 'Content', width: 'grow' },
  { name: 'dates', view: 'Dates', width: 'grow' },
]

export const schemeButtons = [
  buttonNames.edit,
  buttonNames.toggleArchive,
  buttonNames.delete,
]

export const schemeHeaderButtons = [
  buttonNames.toggleShow,
  buttonNames.deleteAll,
]
