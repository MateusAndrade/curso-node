const http = require('http');

var server = http.createServer( function(req,res){

    if(req.url == "/galeria") res.end(JSON.stringify({ msg: 'Galeria de Noticias' }));        

    if(req.url == "/login") res.end(JSON.stringify({ msg: 'Página de Login' }));            

    if(req.url == "/" ) res.end( `${new Date()}`);  

});

server.listen(8585);