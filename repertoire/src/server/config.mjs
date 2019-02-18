//imports
import http from 'http';
import express from "express";
import io from "socket.io";

//variables
const app = express();
const server = http.Server(app); // create http server
const server_io = io.listen(server);
var users = [];
var connections = [];

//normalize the port number
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

// get the port from the environment
const port = normalizePort(process.env.PORT || 3110 + 1);
app.set('view engine', 'html');
app.use(express.static('public'))
let availablePort = port;

// listen on the port
function startServer(serverPort) {
    server.listen(serverPort);
    console.log('listening on port: %s', serverPort);
}

//functions
/*server.on('Listening', () => {
    console.log('Server is listening on port: ' + availablePort);
});*/

//start the server
startServer(availablePort);
console.log(availablePort);
// on Get or Page load
app.get('/chat', (req, res) => {
    res.render('index');
});

// What occurs when sockets are added and disconnected
server_io.on('connection', function (socket) {
    connections.push(socket);
    console.log(connections.length + " sockets connected");
    //disconnected
    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected %s sockets connected", connections.length)
    });

});