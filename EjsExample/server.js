const express = require('express');
const app = express();

//seta a engien de views do express;
app.set('view engine','ejs');

app.get("/", function(req,res){
    res.send("Home!");
});

app.get('/tecnologia', function(req,res){
    //configura o express para renderizar a view
    res.render('secao/tecnologia');
});

//função executada ao subir o servidor
app.listen( 3000, function(req,res){
    console.log("Servidor Iniciado na porta:"+3000);
});
