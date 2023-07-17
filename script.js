const addInput = document.querySelector(".add-input");
const addButton = document.querySelector("form button");
const taskList = document.querySelector(".list");
let taskArr = [];

showTasks();

// Activate and deactivate input button
addInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    let userData = addInput.value;
    if(userData.trim() != 0) {
        addButton.classList.add("active");
    } else {
        addButton.classList.remove("active");
    }
});

// Add task to list
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let userData = addInput.value;
    let getLocalStorage = localStorage.getItem("Todo");
    if (getLocalStorage === null) {
        taskArr = [];
    } else {
        taskArr = JSON.parse(getLocalStorage);
    }
    taskArr.push(userData);
    localStorage.setItem("Todo", JSON.stringify(taskArr));
    showTasks();
    addButton.classList.remove("active");
    addInput.value = "";
})

function showTasks() {
    let getLocalStorage = localStorage.getItem("Todo");
    if (getLocalStorage === null) {
        taskArr = [];
    } else {
        taskArr = JSON.parse(getLocalStorage);
    }

    // task counter
    let footerMessage = document.querySelector(".footer > span");
    console.log(footerMessage);
    if (taskArr.length === 0) {
        footerMessage.textContent = "You don't have any tasks";
    } else {
        const pendingNum = taskArr.length;
        let taskType = "task";
        if (taskArr.length > 1) {
            taskType = "tasks";
        }
        footerMessage.textContent = `You have ${pendingNum} pending ${taskType}`;
    }
    
    // show tasks as list items
    let newTask = "";
    taskArr.forEach((element, index) => {
        newTask += `<li>${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></li>`
    });
    taskList.innerHTML = newTask;
}

// Delete task
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("Todo");
    taskArr = JSON.parse(getLocalStorage);
    taskArr.splice(index, 1);
    localStorage.setItem("Todo", JSON.stringify(taskArr));
    showTasks();
}