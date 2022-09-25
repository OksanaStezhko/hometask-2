
export const buttonNames = {
  edit: "edit",
  delete: "delete",
  deleteAll: "deleteAll",
  toggleArchive: "toggleArchive",
  toggleView: "toggleView"
}

export const categoryImages = {
    Task: '<i class="fa-solid fa-list button-categories"></i>',
    'Random Thought': '<i class="fa-solid fa-atom button-categories"></i>',
    Idea: '<i class="fa-solid fa-lightbulb button-categories"></i>',
    Quote: '<i class="fa-solid fa-quote-left button-categories"></i>',
  };

  export const buttonImages = {
    [buttonNames.edit]:  `<i class='fa-solid fa-pencil'  data-action = 'edit'></i>`,
    [buttonNames.delete]: ` <i class='fa-solid fa-trash-can' data-action = 'delete'></i>`,
    [buttonNames.deleteAll]: ` <i class='fa-solid fa-trash-can' data-action = 'deleteAll'></i>`,
    [buttonNames.toggleArchive]: ` <i class='fa-solid fa-box-archive' data-action = 'toggleArchive'></i>`,
    [buttonNames.toggleView]: ` <i class='fa-solid fa-box-archive' data-action = 'toggleView'></i>`
  }

