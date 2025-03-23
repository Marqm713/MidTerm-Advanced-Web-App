const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const reviews = [
  {
    name: 'Sandy',
    role: 'Artist',
    rating: 4.5,
    comment: 'A wonderful read! Very insightful and well-written.',
    avatar: 'images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg'
  },
  {
    name: 'John',
    role: 'Producer',
    rating: 4,
    comment: 'Great content! It helped me rethink my workflow.',
    avatar: 'images/avatar/portrait-young-redhead-bearded-male.jpg'
  },
  {
    name: 'Emily',
    role: 'Designer',
    rating: 5,
    comment: 'Absolutely loved it. Highly recommend to professionals.',
    avatar: 'images/avatar/pretty-blonde-woman.jpg'
  }
];

app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

app.listen(PORT, () => {
  console.log(`Review API running on http://localhost:${PORT}`);
});
