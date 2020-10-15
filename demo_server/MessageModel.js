const mongoose = require('mongoose');

const messagePostSchema = new mongoose.Schema({
    email: String,
    message: String
})

const MessagePost = mongoose.model('Message', messagePostSchema);

exports.createMessage = (inEmail, inMessage) =>{
    let message = new MessagePost({
        email: inEmail,
        message: inMessage
    })
    return message;
}

exports.getAllMessages = async () =>{
    let message = await MessagePost.find({})
    return message;
}