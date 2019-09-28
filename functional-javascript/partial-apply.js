var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    let args = slice.call(arguments, 0);
    args.unshift(namespace);
    console.log.apply(null, args);
  };
}

module.exports = logger;
