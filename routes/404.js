/**
 * Created by yaoyin on 2016/6/13.
 */
var express = require('express');
var router = express.Router();
router.route('/').get(function(req,res,next) {
    res.render('404');
});

module.exports = router;