const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

nunjucks.configure('src/views', {
  express: server,
  noCache: true
})
server.use(express.static('public'))

server.get('/', pageLanding)
server.get('/study', pageStudy)
server.get('/give-classes', pageGiveClasses)

server.listen(5500, console.log('Server is running'))