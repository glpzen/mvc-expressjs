"use strict";
var BaseModel = require('./BaseModel');

class User extends BaseModel{

    constructor(){
        super()
        console.log('user model constructor has run.');
        this.users = {};
    }

    getUsers(){
        console.log('get users func has run..');
        super.connection.connect();
        var users = super.connection.query('SELECT * FROM users', function(err, rows, fields){
            if(err) throw err;

            // for (let value of rows) {
            //     console.log(value.name);
            // }

            // console.log(rows);
            this.seUser = rows;

        });
        super.connection.end();

        // return users;
    }

    seUser(rows){
        console.log(rows);
        this.userSet = rows
    }

}

module.exports = User;
