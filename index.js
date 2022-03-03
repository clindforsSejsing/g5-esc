const express = require('express');
const app = express();
const PORT = 5000;
// const pathName = req.url;

app.use(express.static('src'));

// app.get('/*', (req, res) => {
//     res.send('oh shit, it actually works');
// });


app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));