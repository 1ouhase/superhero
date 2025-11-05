const model = require('../models/superheroModel');

exports.getAllSuperhero = async (req, res) => {
    try {
        const data = await model.fetchSuperheros();
        res.json(data)
    } catch (err){
        res.status(500).json({message: 'could not get superheros'})
    }
}

exports.getSuperheroById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await model.fetchSuperheroById(id)
        res.json(data);
    } catch (err) {
        res.status(404).json({message: 'no superhero with that id'})
    }
}