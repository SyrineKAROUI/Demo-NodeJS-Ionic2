/**
 * Created by syrine on 16/02/2016.
 */

exports.retrieveAll = function(req,res){
    var models  = require('../models/index');
    var User = models.user;
     res.send( User.findAll());
};
exports.add =function(req,res){

    var models = require('../models/index');
    var User = models.user;
     console.log(req.body);
    var username	= req.body.username;
    var firstName	= req.body.firstName;
    var lastName	= req.body.lastName;
    var email		= req.body.email;
    var tel			= req.body.tel;
    var password	= req.body.password;
    console.log(username);
    User.build({username:username,firstName:firstName,lastName:lastName,email:email,tel:tel,password:password})
        .save()
        .then(function(req,res){
            res.send('new user !! ');
        })
        .catch(function(error){
            res.send(error);
        });



};



