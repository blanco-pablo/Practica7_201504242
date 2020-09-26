var express = require('express');
var path = require('path');
const fs = require('fs');
const request = require('request');

var pedidos = [];
//SERVER
var app = express();
//Plantilla de nodejs
app.set("view engine","jade"); 

//-------------------------------------------------
//------------------ Middleware -------------------
//-------------------------------------------------
//peticiones application /json
app.use(express.urlencoded({ extended: true }));    
app.use(express.json()); 
//carpeta publica para los usuarios
app.use("/public",express.static(path.join(__dirname,'/public'))); 


//Metodo GET para renderizar el formulario
app.get('/', function (req, res) {    
    let rawdata = fs.readFileSync('../data.json');
    let json = JSON.parse(rawdata); 
    let rawdata2 = fs.readFileSync('../pedidos.json');
    let json2 = JSON.parse(rawdata2); 
    res.render('home', { userlist : json , msm:'',pedidos : json2});
});

//Metodo POST para pedir
app.post('/', function (req, res) { 
    let rawdata = fs.readFileSync('../data.json');
    let json = JSON.parse(rawdata); 
    let rawdata2 = fs.readFileSync('../pedidos.json');
    pedidos = JSON.parse(rawdata2); 
    var datos = {};
    for (let key in json) {
        if (json[key].ID == req.body.id) {
            datos = {
                ID: json[key].ID,
                restaurante: json[key].restaurante,
                Combo: json[key].Combo,
                Descripcion: json[key].Descripcion,
                precio: json[key].precio
            };
            break;
        }
    }
    
    var options = {
        hostname: '127.0.0.1',
        url: 'http://localhost:443/addPedido',
        port: 443,
        path: '/addPedido',
        method: 'POST',
        json: datos
    }
    
    request(options, function(err, re, body){
        if (err) { 
            res.render('home', { userlist : json, msm:'ERROR1' ,pedidos : pedidos});
        }
        res.render('home', { userlist : json, msm:'Ingreso Correcto', pedidos : pedidos});
        
    });
});

//Puerto 3000 donde se inicia el server
app.listen(3000, function () {
    console.log('Cliente en puerto 3000!');
});