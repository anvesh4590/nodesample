const http = require(`http`);

const host = "127.0.0.1";
const port = 6300;
http
  .createServer((req, res) => {
    res.end("hello world");
  })
  .listen(port, host, () => {
    console.log(`server is running at http://${host}:${port}`);
  });
