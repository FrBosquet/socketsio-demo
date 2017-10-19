const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

server.listen(8080, () => {
  console.log('Listening on port 8080')
})

io.on('connection', socket => {
  console.log('Client connected')

  socket.on('disconnect', ()=> console.log('Client disconnected'))

  socket.on('chat message', msg =>{
    io.emit('chat message', msg)
  })
})

