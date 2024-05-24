const express = require('express'); 
const app = express(); 
const { Server } = require('socket.io'); 
const http = require('http'); 
const server = http.createServer(app); 
const io = new Server(server); 
const port = process.env.PORT || 5500; 

app.get('/', (req, res) => { 
	res.sendFile(__dirname + '/index.html'); 
}); 

io.on('connection', (socket) => { 
	socket.on('send Username', (x) => { 
		io.emit('send Username', (x)); 
	}); 

	socket.on('send message', (message) => { 
		io.emit('send message', (message)); 
	}); 
}); 

server.listen(port, () => { 
	console.log(`Server is listening at the port: ${port}`); 
});
