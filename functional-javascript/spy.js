function Spy(target, method) {
  var result = { count: 0 };

  var originalMethod = target[method];
  target[method] = function() {
    result.count++;
    return originalMethod.apply(this, arguments);
  };
  return result;
}

module.exports = Spy;
