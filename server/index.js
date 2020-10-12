const express = require('express')
const serveIndex = require('serve-index');

const app = express();

app.get('/', (req, res) => {
  res.send('Hey wanderer!')
})

if (process.env.NODE_ENV === 'production') {
  app.use('/repo', express.static(__dirname + '../../packages/'));
  app.use('/repo', serveIndex(__dirname + '../../packages/', { 'icons': true }));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

