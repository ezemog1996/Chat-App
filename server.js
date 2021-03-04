const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "https://amazingchatapp.herokuapp.com",
        methods: ['GET', 'POST']
    }
})

app.use(require('cors')());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})

server.listen(process.env.PORT || 3001)