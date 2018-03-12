let express = require('express');
let chirpsRouter = require('./chirps');
let usersRouter = require('./users')

let router = express.Router();

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

module.exports = router;
