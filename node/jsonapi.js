let http = require("http");
let url = require("url");

let server = http.createServer((request, response) => {
  if (request.method != "GET") {
    response.end("Send a get request, you sent: " + request.method);
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  let routeObject = url.parse(request.url, true);
  let myDate = new Date(routeObject.query.iso);
  let responseObject = {};
  if (routeObject.pathname == "/api/parsetime") {
    responseObject = {
      hour: myDate.getHours(),
      minute: myDate.getMinutes(),
      second: myDate.getSeconds()
    };
  } else if (routeObject.pathname == "/api/unixtime") {
    responseObject = {
      unixtime: myDate.getTime()
    };
  }
  response.end(JSON.stringify(responseObject));
});

server.listen(process.argv[2]);
