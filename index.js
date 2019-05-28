//Your code here


function justInvoke(functionName){
return functionName();
}
function setThisWithCall(fn, thisValue, arg){
return fn.call(thisValue, arg);
}
function setThisWithApply(fn, thisValue, args){
return fn.apply(thisValue, args);
}
function returnNewFunctionOf(functionToBeCopied, thisValue){
	const copyFunction = functionToBeCopied.bind(thisValue);
	return copyFunction;
}
