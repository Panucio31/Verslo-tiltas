const express = require('express');
const cors = require('cors');

const PORT = 5000;
const userData = express();

userData.get('/users', (req, res) => {
  res.send('list of users')
})

userData.use(cors())

userData.listen(PORT, ()=> console.log('running on port 5000'));
