const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    console.log(req.method);
    res.write(`
        <html>
            <header></header>
            <body>
                <form method="POST" action="/ohshit">
                    <button type="submit">Change link</button>
                </form>
            </body>
        </html>
    `);
  }

  if (url === '/ohshit') {
    console.log('Oh shit man');
    res.write(`
        <html>
            <header></header>
            <body>
                <h1>Oh shit page</h1>
            </body>
        </html>
    `);
  }
  return res.end();
});

server.listen(3030);
