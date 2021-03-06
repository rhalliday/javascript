const http = require("http");
const bl = require("bl");

const url = process.argv[2];

http.get(url, response =>
  response.pipe(
    bl((err, data) => {
      if (err) throw err;
      const strData = data.toString();
      console.log(strData.length);
      console.log(strData);
    })
  )
);
