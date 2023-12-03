const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
  { id: 1,  name: 'ISETN' },
  { id: 2,  name: 'FSEG' },
  { id: 3,  name: 'ISETK' },
  { id: 4,  name: 'ISI Ariana' },
  { id: 5,  name: 'ISET Rades' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

const server = app.listen(8000, () => {
  console.log(`Backend microservice running on ${server.address().port}`);
});

module.exports = server
