let args = process.argv.splice(2);
console.log(
  args.reduce((acc, current) => {
    acc += Number(current);
    return acc;
  }, 0)
);
