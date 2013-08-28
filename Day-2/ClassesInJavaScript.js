function Employee(id,name){
  if (this.constructor.name !== "Employee") 
    return new Employee(id,name);
  var _id = id, _name = name;
  this.id = function(){
      if (arguments.length == 0) return _id;
      if (typeof arguments[0] != "number" || arguments[0] <= 0)
        throw new Error("invalid id");
      _id = arguments[0];
  };
  this.name = function(){
     if (arguments.length == 0) return _name;
     if (arguments[0].length == 0) throw new Error("name cannot be empty");
     _name = arguments[0]; //after validation
  }
}

function Employee(id,firstName){
  function validateId(id){
    if (typeof id != "number" || id <= 0)
      throw new Error("invalid id");
    return id;
  }
  function validateFirstName(firstName){
    if (firstName.length == 0) throw new Error("firstName cannot be empty");
    return firstName;
  }
  
  this.id = createMember(validateId,id);
  this.firstName = createMember(validateFirstName,firstName);
}

//attributeMetadata = {
  "id" : validatorFn,
}
function createConstructorFunction(entityName,attributeMetadataCollection){
  function createMember(validator,initialValue){
    var valuePlaceHolder = initialValue;
    return function(){
       if (arguments.length == 0) return valuePlaceHolder;
       valuePlaceHolder = validator(arguments[0]);
    }
  }

  var fnBody = "";
  for(var member in attributeMetadataCollection){
    fnBody += "this[" + member + "] = createMember(attributeMetadataCollection[" + member)
  }
  return function "entityName"("attrName1", "attrName2"){
    this[attrName1] = createMember(attrMetaCollec)
  }

}