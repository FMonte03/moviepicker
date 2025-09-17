const express = require('express');
const app = express(); 

const port = 5173;

app.get('/', (req, res) => {
    res.send(`Running on port ${port}`);
} 
);
app.listen(5173, () => {
    console.log(`Server is running on port ${port}`);
})

