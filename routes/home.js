const express = require("express");
const homeRouter = express.Router();

router.get('/', (req, res) => {
    res.send('I Want To Go HOME');
  });
  
  router.get('/:person', (req, res) => {
    res.send(req.params.person);
  });
  
  router.post('/', (req, res) => {
    res.send(req.body);
  });