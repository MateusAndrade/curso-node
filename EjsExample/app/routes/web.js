const express= require("express");

module.exports = (function(){
    const web = express.Router();

    web.get("/", function(req,res){
        res.render('home/index');
    });

    web.get("/adicionar_noticia", function(req,res){
        res.render("admin/form_add_noticia");
    });

    web.get("/noticias", function(req,res){
        res.render("noticias/noticias");
    });

    return web;

})();