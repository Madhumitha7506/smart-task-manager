let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
let taskList = document.getElementById("taskList");
taskList.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");
li.innerText = task.text;

if(task.completed){
li.classList.add("completed");
}

li.onclick = function(){
tasks[index].completed = !tasks[index].completed;
localStorage.setItem("tasks", JSON.stringify(tasks));
displayTasks();
};

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";

deleteBtn.onclick = function(){
tasks.splice(index,1);
localStorage.setItem("tasks", JSON.stringify(tasks));
displayTasks();
};

li.appendChild(deleteBtn);
taskList.appendChild(li);

});
}

function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === ""){
alert("Please enter a task");
return;
}

tasks.push({text:taskText,completed:false});

localStorage.setItem("tasks", JSON.stringify(tasks));

input.value="";

displayTasks();

}

displayTasks();
