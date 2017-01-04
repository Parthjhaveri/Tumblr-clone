const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('demo route working!');
  })
  .post((req, res) => {
    res.send('post route goes here');
  })

module.exports = router;
