function add(){
	function parseArg(arg){
		if (typeof arg == "undefined") return 0;
		if (typeof arg == "function") return parseArg(arg());
		if (typeof arg == "string") return parseInt(arg);
		if (typeof arg.length != "undefined") return add.apply(this,arg);
		return arg;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : 
		parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1));
}

/*
function getArgsExceptFirst(args){
		var result = [];
		for(var i=1;i<args.length;i++) result.push(args[i]);
		return result;
	}
*/