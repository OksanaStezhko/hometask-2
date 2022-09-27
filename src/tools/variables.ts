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
