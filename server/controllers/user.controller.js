//tenemos al modelo en la constante usuario
const User = require('../models/user.model');

module.exports.createUser = (request, response) =>{
    //desestructuramos
    const {userName, email} = request.body;
    User.create({
        userName, email
    })
        .then(user => response.json({insertedUser: user, msg: 'Succesful creation'}))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllUsers = (_,response) =>{
    User.find({})
    .then(retrievedUsers => response.json(retrievedUsers))
    .catch(err => response.json(err))
}

module.exports.getUser = (request, response) =>{
    User.findOne({_id: request.params.id})
    .then(user => response.json(user))
    .catch(err => response.json(err))
}

module.exports.updateUser = (request, response) =>{
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updateUser => response.json(updateUser))
    .catch(err => response.json(err))

}

module.exports.deleteUser = (request, response) =>{
    User.deleteOne({_id: request.params.id})
    .then(userDeleted => response.json(userDeleted))
    .catch(err => response.json(err))
}
