export const buttonNames = {
  edit: 'edit',
  delete: 'delete',
  deleteAll: 'deleteAll',
  toggleArchive: 'toggleArchive',
  toggleShow: 'toggleShow',
}

export const categoryImages = {
  Task: '<i class="fa-solid fa-list button-categories"></i>',
  'Random Thought': '<i class="fa-solid fa-atom button-categories"></i>',
  Idea: '<i class="fa-solid fa-lightbulb button-categories"></i>',
  Quote: '<i class="fa-solid fa-quote-left button-categories"></i>',
}

export const buttonImages = {
  [buttonNames.edit]: `<i class='fa-solid fa-pencil'style="color: inherit "></i>`,
  [buttonNames.delete]: ` <i class='fa-solid fa-trash-can ' style="color: black"></i>`,
  [buttonNames.deleteAll]: ` <i class='fa-solid fa-trash-can'></i>`,
  [buttonNames.toggleArchive]: ` <i class='fa-solid fa-box-archive'  style="color: black"></i>`,
  [buttonNames.toggleShow]: ` <i class='fa-solid fa-box-archive' ></i>`,
}
