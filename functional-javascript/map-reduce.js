module.exports = function arrayMap(arr, fn) {
  return arr.reduce((localArr, curr) => {
    return localArr.concat([fn(curr)]);
  }, []);
};

// official solution
/*
module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr));
    return acc;
  }, []);
};
*/
