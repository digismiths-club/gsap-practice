const express = require('express');
const app = express();
const port = 8080;


app.use(express.json());


let votes = {
  yes: 0,
  no: 0,
};


app.post('/vote', (req, res) => {
  const { option } = req.body;


  if (!option || (option.toLowerCase() !== 'yes' && option.toLowerCase() !== 'no')) {
    return res.status(400).json({ error: 'Invalid vote. Vote must be Yes or No.' });
  }


  if (option.toLowerCase() === 'yes') {
    votes.yes += 1;
  } else if (option.toLowerCase() === 'no') {
    votes.no += 1;
  }

  res.status(201).json({ message: `Vote for '${option}' registered successfully.` });
});


app.get('/votes', (req, res) => {
  res.json({
    totalVotes: {
      yes: votes.yes,
      no: votes.no,
    }
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Simple Voting System</h1>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
