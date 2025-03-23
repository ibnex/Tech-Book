const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const AuthRouter = require('./Routes/AuthRouter')
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;


app.get('/ping', (req, res) => {
    res.send('pong here');
});
app.use(bodyParser.json());
app.use(cors())
app.use('/auth', AuthRouter)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

