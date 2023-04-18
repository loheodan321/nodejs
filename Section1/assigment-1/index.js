const http = require('http');

const server = http.createServer((request, respone) => {
  const url = request.url;
  if (url === '/') {
    respone.write(`
        <html>
            <body>
                <div>Fuck everybody</div>
            </body>
        </html>
    `);
  } else if (url === '/users') {
    respone.write(`
    <html>
        <body>
            <div>Fuck every user</div>
        </body>
    </html>
    `);
  }
  respone.end();
});

server.listen(3070);
