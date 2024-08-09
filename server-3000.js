import http from 'http';

http
  .createServer((req, res) => {
    res.end('Hello World From Local');
  })
  .listen(3000);
