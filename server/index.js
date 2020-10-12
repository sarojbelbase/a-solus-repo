const express = require('express')
const serveIndex = require('serve-index');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(__dirname + '../../packages/'));
    app.use('/', serveIndex(__dirname + '../../packages/', { 'icons': true }));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

