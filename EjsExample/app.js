const app = require("./app/config/server");

//Import api and web routes
const api = require("./app/routes/api");
const web = require("./app/routes/web");

// Create api and web routes
app.use('/api',api);
app.use('/',web);

// Start the server
app.listen(3000, function(req,res){
    console.log("Servidor Iniciado na porta:"+3000);
});
