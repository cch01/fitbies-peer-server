const PeerServer = require('peer').PeerServer;
const PORT = process.env.PORT;
const peerServer = PeerServer({
  port: PORT,
  path: '/meetings',
  key: process.env.PEER_SERVER_KEY,
});

peerServer.on('connection', (client) => {
  console.log(`${client.getId()} has been connected.`);
});

peerServer.on('disconnect', (client) => {
  console.log(`${client.getId()} has been disconnected.`);
});

console.log(`Peer server started on port ${PORT}`);

