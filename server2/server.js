const http = require('http');// importer le module http
// importer le module fs (système de fichiers)  
const fs = require('fs'); 
// pour lire le contenu du fichier "file.html" en utilisant l'encodage UTF-8.
const a = fs.readFileSync('file.html', 'UTF-8');

// Création du serveur HTTP
const server = http.createServer((req, res) => {
  res.write(a); // affichage de contenu de frontend 
  res.end('<p>bonjour du cote serveur (nodejs)! </p> ');
//   
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});