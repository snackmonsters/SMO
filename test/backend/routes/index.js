var express = require('express');
var router = express.Router();
var user = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

router.get('/hi', function(req, res, next) {
  res.send({'hi':'hahahahah'})
});


router.get('/email', function(req, res, next) {
  user.find(function(err, users){
    if(err) return res.status(500).send({error: 'database find failure'})
    res.send(users)
  })
})

// router.post('/registeremail', (req, res) => res.json)


router.get('email/:email', function(req, res) {
  user.findOne({email: req.params.email}, function(err, user){
    if(err) return res.status(500).send({error: 'database find failure'})
    if(!user) return res.status(404).send({error: 'user not found'})
    res.json(user)
  })
})

module.exports = router;
