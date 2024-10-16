function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value;

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    let textNode = document.createTextNode(taskValue);
    li.appendChild(textNode);

    let ul = document.getElementById("task-list");
    ul.appendChild(li);

    taskInput.value = "";
}