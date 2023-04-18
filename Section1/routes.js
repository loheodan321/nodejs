const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write(`
   <html>
    <header>
      <h1>Enter some name</h1>
    </header>  
     <body>
       <form action="/message" method="POST">
       <input placeholder="type something here" type="string" name="myInput01"/> 
       <button type="submit">Submit</button>
       </form>
     </body>
   </html>
   `);
    res.end();
  }

  if (url === '/message' && method === 'POST') {
    const data = [];
    req.on('data', (chunk) => {
      data.push(chunk);
      console.log('This shit is chunk', data);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(data).toString();
      const value = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', value);
    });

    res.write(
      `
        <html>
         <header>
           <h1>Message page</h1>
         </header>  
          <body>
            <div>Welcome to message page</div>
          </body>
        </html> 
        `
    );
    return res.end();
  }
};

module.exports = { handlerRequest: requestHandler };
