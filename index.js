const http = require('http');
const url = require('url');
const port = 3000;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname.toLowerCase();

  switch (path) {
    case "/":
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end("Homepage");
      break;
    case "/rifkkimaulana":
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end("Selamat malam temanku yang tidak bahagia.");
      break;
    default:
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end("Default pages");
  }
});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
  console.log("press Ctrl-C to terminate....");
});
