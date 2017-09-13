const express = require("express");

module.exports = (function(){

    const api  = express.Router();

    api.get("/",function(req,res){
        res.send(JSON.stringify({
            msg: "Api Conectada",
            date: new Date()
        })).status(200);
    });

    return api;

})();