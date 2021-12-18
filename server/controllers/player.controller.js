const Player = require('../models/player.model')

const getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players) )
        .catch( (error) => res.status(400).json(error.response) )
}

const createPlayer = (req, res) => {
    Player.create(req.body)
        .then( (newPlayer) => res.json(newPlayer) )
        .catch( (error) => res.status(400).json(error.response) )
}

const getOnePlayer = (req, res) => {
    Player.findOne( {_id: req.params.id} )
        .then((player) => res.json(player) )
        .catch( (error) => res.status(400).json(error.response) )
}

const updatePlayer = (req, res) => {
    Player.findOneAndUpdate( {_id: req.parama.id}, req.body, {
        new: true,
        runValidators: true,
    } )
        .then( (updatedPlayer) => res.json(updatedPlayer) )
        .catch( (error) => res.status(400).json(error.response) )
}

const deletePlayer = (req, res) => {
    Player.deleteOne( {_id: req.params.id} )
        .then( (result) => res.json(result) )
        .catch( (error) => res.status(400).json(error.response) )
}
module.exports = {
    getAllPlayers,
    createPlayer,
    getOnePlayer,
    updatePlayer,
    deletePlayer,
}
