const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    { id: '1', title: 'Book Review: The Bear & The Nightingale' },
    { id: '2', title: 'Game Review: Pokemon Brilliant Diamond' },
    { id: '3', title: 'Show Review: Alice in Borderland' },
    { id: '4', title: 'Show Review: Stranger Things' },
    { id: '5', title: 'Show Review: Jury Duty, Company Retreat' },
    { id: '6', title: 'Show Review: Avatar: Last Airbender' },
    { id: '7', title: 'Show Review: Smallville' },
  ]);
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});