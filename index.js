const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            return res.end();
        }
    });
}).listen(5050);

console.log('Server running at http://localhost:5050/');
