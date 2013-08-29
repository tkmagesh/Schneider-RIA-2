var myApp = myApp || {};

(function(window,$,undefined){
	
	$(function(){
		$("#btnAddTask").on("click",onBtnAddTaskClick);
		$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
		$("#ulTaskList").on("click","li",onTaskItemClick);
		$("#divMessage").slideUp();
		$("#txtTask").hint();
	});

	function onBtnRemoveCompletedClick(){
		//$("#ulTaskList > li.completed").fadeOut('fast',function(){
		var tasksToRemove = $("#ulTaskList > li.completed").length;
		$("#ulTaskList > li.completed").animate({opacity : 0, fontSize : '32px'},2000,function(){
			$(this).remove();
		});
		displayMessage(tasksToRemove + " completed tasks are removed");
	}

	function onTaskItemClick(){
		$(this).toggleClass("completed");
	}

	function onBtnAddTaskClick(){
		$("<li>")
			.html($("#txtTask").val())
			.attr("task-id",new Date().getTime())
			.appendTo("#ulTaskList");
		displayMessage("A new task is added");
	}

	function displayMessage(msg,delay){
    	$("#divMessage")
    		.html(msg)
    		.slideDown(200)
    		.delay(3000)
    		.slideUp(200);
    }

}(window,jQuery));
	