var express = require('express');
var router = express.Router();
var userService = require('../services/UserService/userService')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

router.get('/hi', function(req, res, next) {
  res.send({'hi':'hahahahah'})
});


router.get('/email', function(req, res, next) {
  // 유저 이메일 받아서 유저 정보를 반환한다
  var email = req.params.email
  userInfo = userService.findUserByEmail(email)
  res.send(userInfo)
})

router.post('/registeremail', function(req, res) {
  // 유저 메일을 받아 DB에 저장한다.
  console.log('haha')
  var user = userService.findUserByEmail(req.params.email);
  if(!user) {
    userService.registerUser(req.params.email);
  }
})


// router.get('email/:email', function(req, res) {
//   user.findOne({email: req.params.email}, function(err, user){
//     if(err) return res.status(500).send({error: 'database find failure'})
//     if(!user) return res.status(404).send({error: 'user not found'})
//     res.json(user)
//   })
// })

module.exports = router;
