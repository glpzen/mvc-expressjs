
var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');

var userController = new UserController();

/* GET home page. */
router.get('/', function(req, res){
    userController.run(req, res);
});

module.exports = router;
