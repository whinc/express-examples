const express = require('express')

const app = express()

app.get('/foo', (req, res) => {
  res.send(`${req.method} ${req.url}`)
})
const blog = express.Router()
blog.use((req, res, next) => {
  res.appendHeader('X-middware', 1)
  next()
})

blog.get('/zoo', (req, res) => {
  res.send(`${req.method} ${req.url}`)
})
app.use('/blog', blog)
app.listen(3002)