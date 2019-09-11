var mongoose = require('mongoose')

const User = require('../../models/user')

module.exports = {
    findUserByEmail(email) {
        User.findOneByEmail({email: email},  function(err, notice_dt){
            if (err){            
                res.send(err);
            }else {
                if( notice_dt == null){
                    ;
                }
            }
    })
    },
    registerUserEmail(email) {
        User.create({
            email: email
        })
    }
}