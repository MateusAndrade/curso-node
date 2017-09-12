const express = require('express');
const app = express();

//seta a engine de views do express;
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
    res.render("index");
});

//função executada ao subir o servidor
app.listen( 3000, function(req,res){
    console.log("Servidor Iniciado na porta:"+3000);
});
