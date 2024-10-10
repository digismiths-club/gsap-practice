const express = require('express');
const app = express();
const port = 8080;

app.use(express.json()); 

let submissions = [];


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required!" });
    }

    
    const newSubmission = { name, email, message };
    
    submissions.push(newSubmission);

    
    res.status(201).json({ message: "Your message has been received!", submissions });
});


app.get('/submissions', (req, res) => {
    res.json(submissions);
});


app.use('/', (req, res) => {
    res.send('<h1>Contact API</h1>');
});


app.use('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
