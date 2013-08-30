function SalaryCalculator(){
	var _basic, _hra, _da, _tax,_salary,_callbacks = {};

	this.addOnChange = function(attrName,callback){
		if (!_callbacks[attrName])
			_callbacks[attrName] = [];
		_callbacks[attrName].push(callback);
	}
	this.basic = function(){
		if (arguments.length == 0) return _basic;
		//Do validation
		_basic = arguments[0];
		triggerAttrChangeCallbacks("basic");
	};
	function triggerAttrChangeCallbacks(attrName){
		if (_callbacks[attrName]){
			for(var i=0;i<_callbacks[attrName].length;i++){
				_callbacks[attrName][i]();
			}
		}
	}
	this.hra = function(){
		if (arguments.length == 0) return _hra;
		//Do validation
		_hra = arguments[0];
		triggerAttrChangeCallbacks("hra");
	};
	this.da = function(){
		if (arguments.length == 0) return _da;
		//Do validation
		_da = arguments[0];
		triggerAttrChangeCallbacks("da");	
	};
	this.tax = function(){
		if (arguments.length == 0) return _tax;
		//Do validation
		_tax = arguments[0];
		triggerAttrChangeCallbacks("tax");
	};
	this.salary = function(){
		return _salary;
	}
	function setSalary(){
		_salary = arguments[0];
		triggerAttrChangeCallbacks("salary");
	}
	this.calculate = function(){
		var gross = _basic + _hra + _da;
		var taxable = gross * (_tax/100);
		var net = gross - taxable;
		setSalary(net);
	}
}