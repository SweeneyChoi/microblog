var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.send('user: ' + req.params.username);
});
router.get('/',function(req,res,next){
  res.send('...');
})

module.exports = router;
