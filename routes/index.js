/** 사용자 정보 제공 라우터
 * @module routes/user
 * @requires express
 */




const router = require('express').Router();

/** Route serving index html
 * @namespace userRouter
 */
router.use('/user', require('./user'));

module.exports = router;
