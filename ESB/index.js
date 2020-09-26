var express = require('express');
var path = require('path');
const request = require('request');
var app = express();

//peticiones application /json
app.use(express.urlencoded({ extended: true }));    
app.use(express.json()); 

//Metodo GET
app.get('/', function (req, res) {     
    res.send("ESB LISTO");
});

//Metodo POST
//Cliente - Restaurante
app.post('/addPedido', function (req, res) {     
    
    var datos = req.body;
    var optionsRestaurante = {
        hostname: '127.0.0.1',
        url: 'http://localhost:8000/ingreso',
        port: 8000,
        path: '/ingreso',
        method: 'POST',
        json: datos
    }
    request(optionsRestaurante, function(err, re, body){
        if (err) { 
            res.status(200).send("ERROr");
        }
        if(body.status == 200){
            res.status(200).send("OK");
        }
        else{
            res.status(200).send("Error");
        }
        
    });
});

//Metodo POST
//Restaurante - Repartidor
app.post('/addRepartidor', function (req, res) {     
    
    var datos = req.body;
    var optionsRestaurante = {
        hostname: '127.0.0.1',
        url: 'http://localhost:8080/ingreso',
        port: 8000,
        path: '/ingreso',
        method: 'POST',
        json: datos
    }
    request(optionsRestaurante, function(err, re, body){
        if (err) { 
            res.status(200).send("ERROr");
        }
        if(body.status == 200){
            res.status(200).send("OK");
        }
        else{
            res.status(200).send("Error");
        }
        
    });
});



//Puerto 433 donde se inicia el server
app.listen(443, function () {
    console.log('ESB en puerto 443!');
});