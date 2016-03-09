/**
 * Created by syrine on 16/02/2016.
 */
"use strict";
module.exports = function(sequelize,DataTypes){

    var user = sequelize.define('user',{

        username    : DataTypes.STRING,
        firstName   : DataTypes.STRING,
        lastName    : DataTypes.STRING,
        email	    : DataTypes.STRING,
        tel		    : DataTypes.INTEGER,
        password	: DataTypes.STRING



    },{
        timestamps: false
    });
    return user;


};