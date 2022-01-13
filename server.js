const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const distPath = '/dist';

app.use(express.static(path.join(__dirname, distPath)));

app.get('/*', (req, res) => {
  const accessPath = `${__dirname}${distPath}${req.path}.html`;
  fs.access(accessPath, fs.constants.F_OK, (err) => {
    if (err) {
      res.sendFile(`${__dirname}${distPath}/404.html`);
    } else {
      res.sendFile(`${__dirname}${distPath}${req.path}.html`);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
