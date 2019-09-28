let map = require("through2-map");
let http = require("http");

let server = http.createServer((request, response) => {
  request
    .pipe(
      map(chunk => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});

server.listen(process.argv[2]);
