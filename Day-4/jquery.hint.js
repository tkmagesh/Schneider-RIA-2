$.fn.hint = function(){
	var that = this;
	$(that).each(function(index,elem){
		$(elem).bind({
			"focus" : function(){
				var $this = $(this);
				var hintText = $this.attr("hintText");
				if ($this.val() === hintText){
					$this.removeClass("hint").val('');
				}
			},
			"blur" : function(){
				var $this = $(this);
				var hintText = $this.attr("hintText");
				if ($this.val() === ''){
					$this.addClass("hint").val(hintText);
				}
			}
		})
		.addClass("hint")
		.each(function(index,ele){
			$(ele).val($(ele).attr("hintText"));
		});
	})
};
