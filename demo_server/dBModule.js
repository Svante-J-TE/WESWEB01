const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${collectionLocation}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


exports.saveToMongoose = (input) => {
  input.save(()=>{
    console.log("Input successfully saved to MongoDB")
  })
}