//Your code here
function justInvoke(fn) {
   return fn()
}

function setThisWithCall(fn, thisValue, arg) {
   return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, argArray) {
   return fn.apply(thisValue, argArray)
}

function returnNewFunctionOf(fn, thisValue) {
   return fn.bind(thisValue)
}