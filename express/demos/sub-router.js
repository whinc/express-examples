const express = require('express')

const app = express()

// -> app.handle
// -> app._router.handle
// -> find matched layer.path in stack(router) then call layer.handler
// -> route.handler
// -> find matched layer.method in stack(route) then call layer.handler
//  -> user handler
app.get('/foo', (req, res) => {
  res.send(`${req.method} ${req.url}`)
})

const blog = express.Router()

// -> app.handle
// -> app._router.handle
// -> find matched layer.path in stack(router) then call layer.handler
// -> sub router.handler
// -> find matched layer.path in stack(sub router) then call layer.handler
// -> user handler
blog.use((req, res, next) => {
  res.appendHeader('X-middware', 1)
  next()
})

// -> app.handle
// -> app._router.handle
// -> find matched layer.path in stack(router) then call layer.handler
// -> sub router.handler
// -> find matched layer.path in stack(sub router) then call layer.handler
// -> route.handler
// -> find matched layer.method in stack(route) then call layer.handler
// -> user handler
blog.get('/zoo', (req, res) => {
  res.send(`${req.method} ${req.url}`)
})

app.use('/blog', blog)

app.listen(3002)