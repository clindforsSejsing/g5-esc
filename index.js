import express from "express";
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('oh shit, it works');
});

app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));