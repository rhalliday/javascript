const fs = require("fs");
const path = require("path");

module.exports = function(dirName, ext, callback) {
  const fileExt = "." + ext;
  fs.readdir(dirName, (err, list) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    const result = list.filter(item => path.extname(item) === fileExt);
    return callback(null, result);
  });
};
