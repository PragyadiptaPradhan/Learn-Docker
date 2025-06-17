const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("Hello world! from dockerized app!!");
});
app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});