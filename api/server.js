const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

//Attempting to do it directly in this file with server.get instead of router.get ect.
//?? Unclear where the base url is/should-be defined
server.get('/accounts', (req, res) => {
    // db('accounts')
    db.select('*').from('accounts')
    .then(accounts => {
      res.json(accounts);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to get accounts' });
    });
  });

 server.post('/accounts', async (req, res, next) => {
     try{
         const payload = {
             name: req.body.name,
             budget: req.body.budget

         }

         if(!payload.name || !payload.budget) {
             res.status(400).json({message: "Inclulde name and budget"})
         }

         //? Anything wrong with not assinging this to anything?
         await db.insert(payload).into('accounts');
         res.status(201).json("Successfully added");
     } catch (err) {
         //??? What is the point of next in this context? What exactly is it doing here
        next(err);
     }

 })

server.put("/accounts/:id", async (req, res, next) => {

    
})

module.exports = server;
