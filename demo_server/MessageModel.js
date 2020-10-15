const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    message: String
})

const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (email, message) =>{
    let message = new Message({
        email: email,
        message: message
    })
    return message;
}

exports.getMessages = async () =>{
    let message = await Message.find({})
    return message;
}