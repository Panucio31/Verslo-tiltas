const express = require('express');
const cors = require('cors');
const parser = require('body-parser')
const connect = require('./db.js')

const PORT = 5000;
const userData = express();
userData.use(parser.json())

userData.get('/users', (req, res) => {
  res.send('list of users')
})

userData.get('/addUser', (req, res)=> {
  res.send('add new user')
})

userData.get('/userEdit', (req, res) => {
  res.send('edit user here')
})



userData.use(cors())

userData.listen(PORT, ()=> console.log('running on port 5000'));
