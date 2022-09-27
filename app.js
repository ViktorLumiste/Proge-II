let val

// val = document.getElementById("task-form")
// val = document.getElementById("task-form").id
// val = document.getElementById("task-form").className

const taskTitle = document.getElementById("task-title")

taskTitle.style.background = "#333"
taskTitle.style.color = "#fff"
taskTitle.style.padding = "15px"

taskTitle.textContent= "Defined tasks"
taskTitle.innerText= "Favourite tasks"
taskTitle.innerHTML= "<b style='color:red'>Favourite tasks</b>"

val = document.querySelector("#task-title")
val = document.querySelector(".card-title")
val = document.querySelector('ul')
val = document.querySelector('li')

const task = document.querySelector('li')
task.style.color = "green"

// val = document.querySelector('li:last-child')
// document.querySelector('li:nth-child(odd)').style.background = "#ccc"
// document.querySelector('li:nth-child(even)').style.background = "#f4f4f4"

val = document.querySelectorAll("li")
odd_li = document.querySelectorAll("li:nth-child(odd)")
odd_li.forEach((li)=>{
    li.style.background = "#ddd"
})



console.log(val)
console.log(taskTitle)