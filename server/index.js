const express = require('express')
const serveIndex = require('serve-index');
const path = require('path')

const app = express();

const toserve = path.join(__dirname + '../../packages/')

//  Serve index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/index.html'))
);

// Serve static files & index
app.use('/repo', express.static(toserve));
app.use('/repo', serveIndex(toserve, { 'icons': true }));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

