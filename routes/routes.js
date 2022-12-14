const express = require('express');

const router = express.Router()

module.exports = router;

const Model = require('../models/models');
const Model2 = require('../models/modelazo');


//Post Method
router.post('/post', async (req, res) => {
    const datas = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const datasToSave = await datas.save();
        res.status(200).json(datasToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Post Method2

router.post('/postComplete', async (req, res) => {
    const data = new Model2({
        name: req.body.name,
        age: req.body.age,
        favSport: req.body.favSport,
        favNum: req.body.favNum,
        favColour: req.body.favColour
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//GetAll
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model2.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model2.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model2.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update by name Method
router.patch('/update2/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model2.findOneAndUpdate(
            name, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})

//Update by favSport Method2
router.patch('/update3/:favNum', async (req, res) => {
    try {
        const favNum = req.params.favNum;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model2.findOneAndUpdate(
            favNum, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model2.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
    
})

//Delete All
router.delete('/deleteAll', async (req, res) => {
    try {
        const data = await Model2.deleteMany()
        res.deletedCount //number of datas deleted
        res.send(`All datas has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by name Method
router.delete('/delete1/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const options = { new: true };
        const data = await Model2.findOneAndDelete(
            name, options
        )
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

