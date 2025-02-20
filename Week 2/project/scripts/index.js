let LIST_OF_ITEMS = []
const getElementById = (elementId) => document.getElementById(elementId.toString())
const DB_KEY_NAME = 'list_items'

const ADD_TODO_ITEM_FORM = getElementById('add-todo-form')
const ADD_TODO_ITEM_FORM_INPUT = getElementById('add-todo-form-input')
const LIST_ITEM_WRAPPER = getElementById('list-items')

window.addEventListener('load', () => {
  // LIST_OF_ITEMS = readItemsFromStorage()
  renderListItems()
})
// onclick="toggleComplete(event,${todoItem.id})"onclick="showItemInEditMode(${todoItem.id})" onclick="deleteItemFromList(${todoItem.id})"  class="${todoItem.isCompleted ? "completed" : "not-completed"}"
const renderListItems = (listItems = null) => {
  LIST_ITEM_WRAPPER.innerHTML = ''
  if (Array.isArray(listItems)) {

  }else {
    listItems = getItemsFromDB()
  }
  listItems.forEach((todoItem, index) => {
    let itemHtML = createItemHTML(todoItem)
      LIST_ITEM_WRAPPER.innerHTML += itemHtML
  })


}

const createItemHTML = (todoItem) => {
  return `
      <div class="todo-item" id=i${todoItem.d} >
        <p >${todoItem.description}</p>
        <div>
          <i class="fa-solid fa-pen-to-square" onclick="showItemInEditMode(${todoItem.id})"  ></i>
          <i class="fa-solid fa-trash" onclick="deleteItemFromList(${todoItem.id})" ></i>
        </div>
      </div>`
}

function handleOnSubmit (event) {
  event.preventDefault()
  const userInput = event.target[0]?.value
  addItems(userInput)
}

function addItems (userInput) {
  const itemDetails = {
    id: LIST_OF_ITEMS.length + 1,  // YOU NEED ADD THE LOGIC TO GENERATE UNIQUE ID (REQUIREMENTS ARE IT SHOULD BE A UNIQUE INTEGER),
    id: Math.floor(Math.random() * 1000000), // Generates a random integer between 0 and 999999
    description: userInput
  }
  saveItemToDB(itemDetails)
}

const saveItemToDB = (item) => {
  const itemsInDb = getItemsFromDB()
  itemsInDb.push(item)
  UpdateDB(itemsInDb)
}

const getItemsFromDB = () => {
  return JSON.parse(localStorage.getItem(DB_KEY_NAME)  || '[]' )
}

const UpdateDB = (itemsToUpdate) => {
  localStorage.setItem(DB_KEY_NAME, JSON.stringify(itemsToUpdate))
  clearInputs()
  renderListItems(itemsToUpdate)
}

const clearInputs = () => {
  ADD_TODO_ITEM_FORM_INPUT.value =''
}