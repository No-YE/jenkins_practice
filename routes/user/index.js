var express = require('express');
var ctrl = require('./users.ctrl');
var router = express.Router();

/* GET users listing. */
router.get('/', ctrl.get);

module.exports = router;