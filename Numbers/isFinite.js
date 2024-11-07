// Function that checks if a number is infinity
function isitFinite(x){
  // If it is finite, it will return not infinite. Else it will return infinity.
  if(isFinite(x)){
    return 'Number is not infinity'
  } else{
    return 'Number is INFINITY!'
  }
}


console.log(isitFinite(Infinity))
console.log(isitFinite(1000))