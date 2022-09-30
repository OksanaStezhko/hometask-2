export type TCategories = 'Idea' | 'Quote' | 'Random Thought' | 'Task'

export type TFormattedData = {
  id: string
  name: string
  created: string
  content: string
  category: string
  archived: boolean
  dates: string
  image: string
}

export type TSummary = {
  id: string
  category: string
  active: number
  archived: number
  image: string
}

export type TData = {
  id: string
  name: string
  created: string
  content: string
  category: string
  archived: boolean
}

type TColumnName =
  | 'name'
  | 'image'
  | 'created'
  | 'category'
  | 'content'
  | 'dates'
  | 'active'
  | 'archived'

type TWidth = 'small' | 'middle' | 'large' | 'grow'

export type TColumns = {
  name: TColumnName
  view: string
  width: TWidth
}
export type TColumnsNote = {
  name: 'name' | 'image' | 'created' | 'category' | 'content' | 'dates'
  view: string
  width: TWidth
}

export type TColumnsSummary = {
  name: 'image' | 'category' | 'active' | 'archived'
  view: string
  width: TWidth
}

export type TSchemeButtonRow = 'edit' | 'toggleArchive' | 'delete'

export type TSchemeButtonHeader = 'toggleShow' | 'deleteAll'

export type TActionsRow = {
  name: TSchemeButtonRow
  action?: (id: string) => { payload: string; type: string }
}

export type TActionsHeader = {
  name: TSchemeButtonHeader
  action: () => { payload: string | undefined; type: string }
}
