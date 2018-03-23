"use strict";

var User = require('../models/User');

class UserController{

    constructor() {
        console.log('user controller has run');
        this.user = new User();
    }

    run(req, res) {
        console.log('run func has run');
        var users = this.user.getUsers();

        // console.log(users.rows);
    }
}


module.exports = UserController;
