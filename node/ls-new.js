const ls = require("./ls-module");

ls(process.argv[2], process.argv[3], (err, data) => {
  if (err) throw err;
  console.log(data.join("\n"));
});
