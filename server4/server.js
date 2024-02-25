const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const formHTML = fs.readFileSync('formul.html', 'utf8');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(formHTML);
});

app.post('/', (req, res) => {
  const Quantity = req.body.Quantity;
  const color = req.body.color;
  let message;

  if (color === "red" && Quantity < 100) {
    message = `<p>Your order will be delivered in 15 days .. you will receive ${Quantity} pieces from the color ${color}</p>`;
  } else if (color === "red" && Quantity >= 100) {
    message = `we can't provide this quantity in this color !`;
  } else if (color === "green" && Quantity < 50) {
    message = `<p>Your order will be delivered in 15 days .. you will receive ${Quantity} pieces from the color ${color}</p>`;
  } else if (color === "green" && Quantity >= 50) {
    message = `we can't provide this quantity in this color !`;
  } else if (color === "blue" && Quantity < 75) {
    message = `<p>Your order will be delivered in 15 days .. you will receive ${Quantity} pieces from the color ${color}</p>`;
  } else if (color === "blue" && Quantity >= 75) {
    message = `we can't provide this quantity in this color !`;
  }
  const responseHTML = `
  ${formHTML.replace('</div>', `
      <p>Hi : ${req.body.name} ${req.body.fname}</p>
      ${message}</div>`)}`;
res.send(responseHTML);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});