//se importa un modulo 
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'username is mandatory']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), message: "Invalid email"
        }
    }
});

const User = mongoose.model('User', UserSchema);

//exportamos el modelo
module.exports = User;
