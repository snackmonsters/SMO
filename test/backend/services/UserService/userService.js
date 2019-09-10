var mongoose = require('mongoose')

const User = mongoose.model('user', user);

export default {
    findUserByEmail(email) {
        User.findOne({email: email},  function(err, notice_dt){
            if (err){            
                res.send(err);
            }else {
                if( notice_dt == null){
                    ;
                }
            }
    })
    },

    registerUser(user) {
        var createUser = new User({
            name = user.name,
            email = user.email,
            phone = user.phone,
            address = user.address,
            interest = user.interest,
            profileImageSrc = user.profileImageSrc,
            profileContent = user.profileContent,
            myStudy = user.myStudy,
            pickStudy = user.pickStudy,
            emailVerified = user.emailVerified,
        })

        createUser.save(function (err) {
            if (err) return handleError(err)
            // saved!
        })
    }
}