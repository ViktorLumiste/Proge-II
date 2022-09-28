const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const tasksHeading = document.querySelector('#task-title')

form.addEventListener('submit', runEvent)

// taskInput.addEventListener('keydown', runEvent)
// taskInput.addEventListener('keyup', runEvent)
// taskInput.addEventListener('keypress', runEvent)
// taskInput.addEventListener('focus', runEvent)
// taskInput.addEventListener('blur', runEvent)
taskInput.addEventListener('cut', runEvent)
taskInput.addEventListener('paste', runEvent)
taskInput.addEventListener('input', runEvent)


function runEvent(event){
    console.log("event type ", event.type)
    tasksHeading.innerText = event.target.value
    event.preventDefault()
}






