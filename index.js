require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;



const app = express();
const routes = require('./routes/routes');
app.use(express.json());

app.use('/api', routes)
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Altoque mi rey');
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Started at ${3000}`)
})

