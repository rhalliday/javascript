const http = require("http");
const bl = require("bl");

const urls = process.argv.slice(2);
let completed = 0;
let stash = [];

function printResults() {
  stash.forEach(item => console.log(item));
}

for (let i = 0; i < urls.length; i++) {
  http.get(urls[i], response =>
    response.pipe(
      bl((err, data) => {
        if (err) throw err;
        stash[i] = data.toString();
        completed++;
        if (completed == urls.length) {
          printResults();
        }
      })
    )
  );
}
