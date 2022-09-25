import { buttonNames } from '../tools/variables'

export const schemeData = [
  { name: 'image', view: '', width: 'small' },
  { name: 'name', view: 'Name', width: 'middle' },
  { name: 'created', view: 'Created', width: 'small' },
  { name: 'category', view: 'Category', with: 'middle' },
  { name: 'content', view: 'Content', width: 'large' },
  { name: 'dates', view: 'Dates', width: 'large' },
]

export const schemeButtons = [
  buttonNames.edit,
  buttonNames.toggleArchive,
  buttonNames.delete,
]

export const schemeHeaderButtons = [
  buttonNames.toggleView,
  buttonNames.deleteAll,
]
