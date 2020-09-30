exports.min = function min (array) {
    if ( array == 0 || array == '' || array == undefined )
        return 0;
var result = array[0];
        for ( var i = 1; i < array.length; i++) {
            if (result > array[i])
            result = array[i];
        }
    return result;
}
exports.max = function max (array) {
    if ( array == 0 || array == '' || array == undefined)
  return 0;
  var result = array[0];
  for ( var i = 1; i < array.length; i++) {
      if (result < array[i])
      result = array[i];
  }
return result;
}


exports.avg = function avg (array) {
    if ( array == 0 || array == '' || array == undefined)
  return 0;
}
