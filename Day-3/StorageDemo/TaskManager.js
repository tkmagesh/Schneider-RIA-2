var myApp = myApp || {};

(function(window){
	var taskList;
	var taskStorage = new myApp.TaskStorage(window.sessionStorage);

	window.addEventListener("DOMContentLoaded",initialize);
	function initialize(){
		document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompletedClick);
		taskList = document.getElementById("ulTaskList");
		loadTasksFromStorage();
	}

	function loadTasksFromStorage(){
		var tasks = taskStorage.getAllTasks();
		for(var i=0;i<tasks.length;i++)
			addTaskToList(tasks[i]);			
	}


	function onBtnRemoveCompletedClick(){
		for(var i=taskList.children.length-1;i>=0;i--){
			var taskItem = taskList.children[i];
			if (taskItem.classList.contains("completed"))
				taskStorage.removeTask(taskItem.getAttribute("task-id"));
				taskItem.remove();
		}
	}


	function onTaskItemClick(){
		if (this.classList.contains("completed")){
			this.classList.remove("completed");
		} else {
			this.classList.add("completed");
		}
		taskStorage.toggleCompletion(this.getAttribute("task-id"));
	}

	function onBtnAddTaskClick(){
		var taskName = document.getElementById("txtTask").value;
		var newTask = taskStorage.addTask(taskName);
		addTaskToList(newTask);
	}

	function addTaskToList(task){
		var newTaskItem = document.createElement("li");
		newTaskItem.innerHTML = task.name;
		newTaskItem.addEventListener("click",onTaskItemClick);
		newTaskItem.setAttribute("task-id",task.id);
		if (task.isCompleted)
			newTaskItem.classList.add("completed");
		taskList.appendChild(newTaskItem);
	}




}(window));
	