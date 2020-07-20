

const toDoContainer = document.querySelector('.todo-container')
const nameOfTask = document.getElementById('textbar')
const descriptionTask = document.getElementById('descriptionTask')
const ulContainer = document.getElementById('ul-container')
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', (e) => {
    renderTask()
})


// create li for each task & description and slap it on the dom

const renderTask = () => {
    let newLi = document.createElement('li')
    newLi.innerText = nameOfTask.value
    newLi.className = 'name-of-task'

    let taskDescription = document.createElement('li')
    taskDescription.className = 'description-of-task'
    taskDescription.innerText = descriptionTask.value

    
    const editBtn = document.createElement('button')
    editBtn.className = 'edit-button'
    editBtn.innerText = 'edit task'


    editBtn.addEventListener('click', () => {
        let editNameField = document.createElement('input')
        editNameField.type = 'text'
        editNameField.className = 'edit-name'
        editNameField.placeholder = 'edit name of your task'
        let editDescriptionField = document.createElement('input')
        editDescriptionField.type = 'text'
        editDescriptionField.className = 'edit-task'
        editDescriptionField.placeholder = 'edit description for task'
        let changeInfoButton = document.createElement('button')
        changeInfoButton.innerText = 'confirm changes'

        changeInfoButton.addEventListener('click', () => {
            newLi.innerText = editNameField.value
            taskDescription.innerText = editDescriptionField.value
            editNameField.style.display = 'none'
            editDescriptionField.style.display = 'none'
            changeInfoButton.style.display = 'none'

        })
        ulContainer.append(editNameField, editDescriptionField, changeInfoButton)
    })
    
    ulContainer.append(newLi, taskDescription, editBtn)


}