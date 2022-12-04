const express = require('express')
const main = require('./routes/main')
const app = express()
const port = 4000

app.use('/', main)
// app.get('/', (req, res) => {
  
//   res.send('<h1>This is fist page</h1>')
// })
app.post('index', (req, res) => {
  let a = {"message":"Hello World!1"}
  res.send(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})