exports.min = function min (array) {
    if ( array == 0 || array == '' || array == undefined )
        return 0;
let result = array[0];
        for ( let i = 1; i < array.length; i++) {
            if (result > array[i])
            result = array[i];
        }
    return result;
}
exports.max = function max (array) {
    if ( array == 0 || array == '' || array == undefined)
  return 0;
let result = array[0];
  for ( let i = 1; i < array.length; i++) {
      if (result < array[i])
      result = array[i];
  }
return result;
}


exports.avg = function avg (array) {
    if ( array == 0 || array == '' || array == undefined)
  return 0;

let wholeAmount = array[0];
let result = 0;

      for ( let i = 1; i < array.length; i++) {
          wholeAmount += array[i];
      }
  result = wholeAmount / array.length;
    
  return result;
}
