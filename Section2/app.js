var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url === '/') {
        console.log(req.method);
        res.write("\n        <html>\n            <header></header>\n            <body>\n                <form method=\"POST\" action=\"/ohshit\">\n                    <button type=\"submit\">Change link</button>\n                </form>\n            </body>\n        </html>\n    ");
    }
    if (url === '/ohshit') {
        console.log('Oh shit man');
        res.write("\n        <html>\n            <header></header>\n            <body>\n                <h1>Oh shit page</h1>\n            </body>\n        </html>\n    ");
    }
    return res.end();
});
server.listen(3030);
