const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

//Attempting to do it directly in this file with server.get instead of router.get ect.
//?? Unclear where the base url is/should-be defined
server.get('/accounts', (req, res) => {
    db('accounts')
    .then(accounts => {
      res.json(accounts);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to get accounts' });
    });
  });


module.exports = server;
