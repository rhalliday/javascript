const fs = require("fs");
const path = require("path");

const dirName = process.argv[2];
const fileExt = "." + process.argv[3];
fs.readdir(dirName, (err, list) => {
  if (err) throw err;
  const result = list.filter(item => path.extname(item) === fileExt);
  console.log(result.join("\n"));
});
