const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mru';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log("Database connection error:", err));

module.exports = mongoose;
