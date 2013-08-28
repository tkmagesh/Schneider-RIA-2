var myApp = myApp || {};
(function(app){	
	function TaskStorage(storage){
		this.storage = storage;
	};

	TaskStorage.prototype.addTask = function(taskName){
		var newTaskId = new Date().getTime().toString();
		this.storage.setItem(newTaskId,taskName);
		return {id : newTaskId, name : taskName};
	}

	TaskStorage.prototype.removeTask = function(taskId){
		this.storage.removeItem(taskId);
	}

	TaskStorage.prototype.getAllTasks= function(){
		var result = [];
		for(var i=0;i<this.storage.length;i++){
			var taskId = this.storage.key(i);
			var taskName = this.storage.getItem(taskId);
			result.push({id : taskId, name : taskName});
		}
		return result;
	}
	app.TaskStorage = TaskStorage;
}(myApp));