const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

const articleRoute = require('./routes/articles');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/articles', articleRoute);

app.get('/', (req, res) => {
    res.send('Home sweet home !');
});

//Connect to database
mongoose.connect(process.env.DB_CONNECTION,
                () => console.log('Connected to the database !'));

//How to start listening
app.listen(8000);