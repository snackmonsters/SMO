var mongoose = require('mongoose')
var Schema = mongoose.Schema

var user = new Schema({
    id: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    interest: Array,
    profileImageSrc: String,
    profileContent: String,
    myStudy: Array,
    pickStudy: Array,
    emailVerified: Boolean,
    regDate: String
})

module.exports = mongoose.model('user', user)