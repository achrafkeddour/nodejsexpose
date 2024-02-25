const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

const b = fs.readFileSync('secondfile.html', 'utf8');
app.get('/', (req, res) => {
  res.send(b);
});
// Handle form submission
app.post('/', (req, res) => {
  const formData = req.body;
  const additionalDataHTML = `<p>Votre message est : ${formData.msg}</p>`;
  const responseHTML = ` ${b.replace('</div>', ` ${additionalDataHTML}</div>`)}`;
  res.send(responseHTML);
});
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});