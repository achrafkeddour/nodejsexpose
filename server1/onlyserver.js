const http = require('http'); // Importer le module http de Node.js pour créer des serveurs HTTP et interagir avec eux

const server = http.createServer((req, res) => {
  res.end('<h1>Hello from server ! </h1>');        
});

// req : représente la requête HTTP entrante
// res : représente la réponse HTTP que le serveur envoie au client.
// res.end : pour finaliser la réponse HTTP et envoyer les données au client.

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});