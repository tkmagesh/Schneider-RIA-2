var myApp = myApp || {};
(function(app){	
	function TaskStorage(storage){
		this.storage = storage;
	};

	TaskStorage.prototype.addTask = function(taskName){
		var newTaskId = new Date().getTime().toString();
		var newTask = {id : newTaskId, name : taskName, isCompleted : false};
		this.storage.setItem(newTaskId,window.JSON.stringify(newTask));
		return newTask;
	}

	TaskStorage.prototype.removeTask = function(taskId){
		this.storage.removeItem(taskId);
	}

	TaskStorage.prototype.toggleCompletion = function(taskId){
		var task = window.JSON.parse(this.storage.getItem(taskId));
		task.isCompleted = !task.isCompleted;
		this.storage.setItem(taskId,window.JSON.stringify(task));
	}

	TaskStorage.prototype.getAllTasks= function(){
		var result = [];
		for(var i=0;i<this.storage.length;i++){
			var taskId = this.storage.key(i);
			var task = window.JSON.parse(this.storage.getItem(taskId));
			result.push(task);
		}
		return result;
	}
	app.TaskStorage = TaskStorage;
}(myApp));