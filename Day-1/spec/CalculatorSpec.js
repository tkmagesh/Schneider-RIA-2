describe("Calculator",function(){
	it("when added without any arguments returns 0",function(){
		var result = add();
		expect(result).toBe(0);
	});

	it("should be able to add two numbers",function(){
		var result = add(100,200);
		expect(result).toBe(300);
	});

	it("should be able to add one number",function(){
		var result = add(100);
		expect(result).toBe(100);
	});

	it("should be able to add two functions returning numbers",function(){
		function f1(){
			return 100;
		}
		function f2(){
			return 200;
		}
		var result = add(f1,f2);
		expect(result).toBe(300);
	});

	it("should be able to add two numbers in string format",function(){
		var result = add("100","200");
		expect(result).toBe(300);
	});

	it("should be able to add two functions returning numbers in string format",function(){
		function f1(){
			return "100";
		}
		function f2(){
			return "200"
		}
		var result = add(f1,f2);
		expect(result).toBe(300);
	});

	it("should be able to add two functions returning functions returning numbers in string format",function(){
		function f1(){
			return function(){
				return "100";
			}
		}
		function f2(){
			return function(){
				return "200";
			}
		}
		var result = add(f1,f2);
		expect(result).toBe(300);
	});

	it("should be able to add varying number of arguments of type number",function(){
		var result = add(100,200,300);
		expect(result).toBe(600);
	});

	it("should be able to add varying number of arguments of any type",function(){
		var result = add(100,"200",function(){ return 300;});
		expect(result).toBe(600);
	});

	it("should be able to add numbers in an array",function(){
		var result = add([100,200,300]);
		expect(result).toBe(600);
	});

	it("should be able to add numbers in an array returned by a function",function(){
		var result = add(function(){ return [100,200,300]});
		expect(result).toBe(600);
	});

	it("should be able to add an array of functions",function(){
		var fArray = [
			function (){ return 100;},
			function (){ return 200;},
			function (){ return 300;},
		]
		var result = add(fArray);
		expect(result).toBe(600);
	});

	it("should be able to add an array of functions that return an array of numbers",function(){
		var fArray = [
			function (){ return [100];},
			function (){ return [200,300];}
		];
		var result = add(fArray);
		expect(result).toBe(600);
	});

	it("should be able to add an array of arrays",function(){
		var arrOfArray = [100,[200,[300]]];		
		var result = add(arrOfArray);
		expect(result).toBe(600);
	});

	
});