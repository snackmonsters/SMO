const router = require('express').Router();
const Study = require('../models/study');

// Find All
router.get('/', (req, res) => {
  Study.findAll()
    .then((Studys) => {
      if (!Studys.length) return res.status(404).send({ err: 'Study not found' });
      res.send(`find successfully: ${Studys}`);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by Studyid
router.get('/Studyid/:Studyid', (req, res) => {
  Study.findOneByStudyid(req.params.Studyid)
    .then((Study) => {
      if (!Study) return res.status(404).send({ err: 'Study not found' });
      res.send(`findOne successfully: ${Study}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new Study document
router.post('/', (req, res) => {
  Study.create(req.body)
    .then(Study => res.send(Study))
    .catch(err => res.status(500).send(err));
});

// Update by Studyid
router.put('/Studyid/:Studyid', (req, res) => {
  Study.updateByStudyid(req.params.Studyid, req.body)
    .then(Study => res.send(Study))
    .catch(err => res.status(500).send(err));
});

// Delete by Studyid
router.delete('/Studyid/:Studyid', (req, res) => {
  Study.deleteByStudyid(req.params.Studyid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
