let http = require("http");
let fs = require("fs");

let server = http.createServer((request, response) => {
  let stream = fs.createReadStream(process.argv[3]);
  stream.pipe(response);
});

server.listen(process.argv[2]);
