function sort(list,comparerFn){
  for(var i=0; i<list.length-1; i++)
    for(var j=i+1; j<list.length; j++){
      var left = list[i], right = list[j];
      if (comparerFn(left,right) > 0){
         var temp = left;
         list[i] = list[j];
         list[j] = temp;
      }
     }
}

function printProducts(list){
  for(var i=0;i<list.length;i++) print.call(list[i]);
}
function print(){
  console.log(this.id, this.name, this.cost, this.units,this.category);
}
function productIdComparer(left,right){
  if (left.id > right.id) return 1;
  if (left.id < right.id) return -1;
  return 0;
}

sort(products,productIdComparer);

function productCostComparer(left,right){
  if (left.cost > right.cost) return 1;
  if (left.cost < right.cost) return -1;
  return 0;
}

sort(products,productIdComparer);

============================================================

function productComparer(left,right,fieldName){
  if (left[fieldName] > right[fieldName]) return 1;
  if (left[fieldName] < right[fieldName]) return -1;
  return 0;
}

function sort(list,fieldName){
  for(var i=0; i<list.length-1; i++)
    for(var j=i+1; j<list.length; j++){
      var left = list[i], right = list[j];
      if (productComparer(left,right,fieldName) > 0){
         var temp = left;
         list[i] = list[j];
         list[j] = temp;
      }
     }
}

sort(products,"cost");
printProducts(products);
================================================================

function sum(list,fieldSelector){
  var result = 0;
  var fieldSelectorFn;
  if (typeof fieldSelector == "function"){
      fieldSelectorFn = fieldSelector;
    } else {
      fieldSelectorFn = function(p){ return p[fieldSelector]};
    }
  for(var i=0;i<list.length;i++){
    result += fieldSelectorFn(list[i]);
  }
  return result;
}

function min(list,fieldSelector){
  var selectorFn = typeof fieldSelector == "function" ? fieldSelector : function(item){ return item[fieldSelector]; };
  var result = selectorFn(list[0]);
  for(var i=1;i<list.length;i++){
    var currentValue = selectorFn(list[i]);
    if ( currentValue < result) result = currentValue;
  }
  return result;
}

function max(list,fieldSelector){
  var selectorFn = typeof fieldSelector == "function" ? fieldSelector : function(item){ return item[fieldSelector]; };
  var result = selectorFn(list[0]);
  for(var i=1;i<list.length;i++){
    var currentValue = selectorFn(list[i]);
    if ( currentValue > result) result = currentValue;
  }
  return result;
}

function average(list,fieldSelector){
  return sum(list,fieldSelector) / list.length;
}

function map(list,mapFn){
   var result = [];
   for(var i=0;i<list.length;i++)
      result.push(mapFn(list[i]));
   return result;
}

function groupBy(list,fieldName){
  var result = [];
  function getGroupedItem(k){
    var groupedItem;
    for(var i=0;i<result.length;i++)
      if (result[i].key == k)
         groupedItem = result[i];
    if (typeof groupedItem == "undefined"){
       var groupedItem = {
               key : k,
               value :[]
            };
        result.push(groupedItem);
     }
     return groupedItem;     
    }

  for(var i=0;i<list.length;i++){
    var item = list[i];
    var groupKey = item[fieldName];
    var groupedItem = getGroupedItem(groupKey);
    groupedItem.value.push(item);
  }
  return result;
}

function groupBy(list,fieldName){
  var result = {};
  for(var i=0;i<list.length;i++){
    var item = list[i];
    var groupKey = item[fieldName];
    if (typeof result[groupKey] == "undefined") result[groupKey] = [];
    result[groupKey].push(item);
  }
  return result;
}

=============================================================
function join(innerList
		,innerKeyName
		,outerList
		,outerKeyName
		,keyComparerFn
		,transformerFn){
	var result = [];
	for(var i=0;i<innerList.length;i++){
		var innerItem = innerList[i];
		var innerKey = innerItem[innerKeyName];

		for(var j=0;j<outerList.length;j++){
			var outerItem = outerList[j];
			var outerKey = outerItem[outerKeyName];
			if (keyComparerFn(innerKey,outerKey) == 0){
				var transformedItem = transformerFn(innerItem,outerItem);
				result.push(transformedItem);
			}
		}
	}
	return result;
}


function categoryIdComparerFn(id1,id2){
  if (id1 == id2) return 0;
  if (id1 < id2) return -1;
  return 1;
}

function productCategoryTransformer(p,c){
  return {
    productId : p.id,
    productName : p.name,
    categoryId : c.id,
    categoryName : c.categoryName
  }
}

var productWithCategory = join(products,"category",categories,"id",categoryIdComparerFn,productCategoryTransformer)




















