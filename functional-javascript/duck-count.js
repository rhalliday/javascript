function duckCount() {
  return Array.prototype.slice.call(arguments, 0).filter(function(item) {
    return Object.prototype.hasOwnProperty.call(item, "quack");
  }).length;
}

module.exports = duckCount;
