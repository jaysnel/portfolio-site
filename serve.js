const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const history = require('connect-history-api-fallback');

const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))

app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

app.get('/', function (req, res) {
  res.render(path.join(__dirname, '/dist/index.html'))
})

app.listen(port, function () {
  console.log( `runing on port ${port}` )
})