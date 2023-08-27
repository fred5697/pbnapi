const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/calculate', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (num1 === undefined || num2 === undefined) {
        res.status(400).json({ error: 'Both numbers are required in the request body' });
        return;
    }

    const result = num1 + num2;
console.log('Received request with body:', req.body);
    res.status(200).json({ result: result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
