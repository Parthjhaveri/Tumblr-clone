const router = require('express').Router();

router.use('/demo', require('./demo/demo-router'));

module.exports = router;
