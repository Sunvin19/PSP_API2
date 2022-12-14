const mongoose = require('mongoose');

const datasSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    favSport: {
        required: true,
        type: String
    },
    favNum: {
        required: true,
        type: Number
    },
    favColour: {
        required: true,
        type: String
    },
    
})

module.exports = mongoose.model('Data', datasSchema)