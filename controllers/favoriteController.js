const store = require('../models/favoriteStore');

exports.createFavorite = (req, res) => {
    store.create(req.body)
    res.status(201).json({message: 'new favorite created'})
}

exports.getAllFavorites = (req, res) => {
    const data = store.findAll();
    res.json(data)
}

exports.deleteFavorite = (req, res) => {
    const ok = store.deleteById(req.params.id);
    if (!ok) {
        return res.ststus(404).json({error:'favorite not found'})
    }
    res.json({message:'favorite deleted'})
}