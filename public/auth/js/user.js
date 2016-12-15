var mongoose = require('mongoose');

var userSchema = new mongoose.schema({
    username: {type: String, unique: true},
    password: {type: String}
});

var User = mongoose.model('myuser', userSchema);

module.exports = User;
