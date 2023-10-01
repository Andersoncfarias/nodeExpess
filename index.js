const express = require("express");

const app = express();

//chama a rota principal
app.get('/', function(req, res){
    res.send("bem vindo ao meu site")
});
//segunda rota
app.get('/rota2', function(req, res){
    res.send("minha segunda rota")
});
//com parametro , para acessar essa rota digite a rota + um parametro
app.get('/parametro/:nome', function(req, res){
    res.send(req.params.nome);
});
//nessa rota a resposta é um html
app.get('/parahtml', function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.listen(3000, function(){
    console.log("servidor rodando na porta 3000");
});