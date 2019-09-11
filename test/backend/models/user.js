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

user.statics.create = function(payload) {
    const newUser = new this(payload)
    return newUser.save()
}

user.statics.findOneByEmail = function(email) {
    return this.findOne({email: email})
}

module.exports = mongoose.model('user', user)