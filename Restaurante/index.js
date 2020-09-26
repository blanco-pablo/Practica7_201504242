var express = require('express');
var path = require('path');
const fs = require('fs');
const moment = require('moment')

const request = require('request');

//var pedidos = [];
var conta = Math.round(Math.random() * (300 - 1) + 1);
var conta2 = Math.round(Math.random() * (390 - 1) + 1);
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
    res.render("home",{ userlist : json , msm:''});
});

//Metodo POST para agregar Combos
app.post('/', function (req, res) { 
    conta = conta + 1;
    var data = {
        ID: conta,
        restaurante: req.body.restaurante,
        Combo:  req.body.Combo,
        Descripcion: req.body.Descripcion,
        precio:req.body.precio
    };
    let rawdata = fs.readFileSync('../data.json');
    let json = JSON.parse(rawdata);
    json.push(data);
    fs.writeFile ("../data.json", JSON.stringify(json), function(err) {
        if (err) throw err;
            console.log('Agregado');            
            res.render("home",{ userlist : json , msm:'Agregado'});
        }
    );
    
});

//Metodo POST para recibir pedidos
app.post('/ingreso', function (req, res) { 
    conta2 = conta2 + 1;
   // pedidos.push({conta: conta, pedido:req.body, hora:moment().format('hh:mm:ss') ,estado:"Pendiente"});
    //ENVIAR DATOS A MOTORISTA
    var options = {
        hostname: '127.0.0.1',
        url: 'http://localhost:8080/ingreso',
        port: 8080,
        path: '/ingreso',
        method: 'POST',
        json: {conta: conta2, pedido:req.body, hora:moment().format('hh:mm:ss') ,estado:"Pendiente"}
    }
    
    request(options, function(err, re, body){
        if(body.status == 200){
            console.log("LLego a Repartidor");
        }       
       // pedidos =re.body.pedido;
    });
    
    res.status(200).send("OK");
});

//Metodo GET para recibir pedidos
app.get('/pedidos', function (req, res) { 
    let rawdata2 = fs.readFileSync('../pedidos.json');
    let json2 = JSON.parse(rawdata2); 
    res.send(json2);
});

//Puerto 3000 donde se inicia el server
app.listen(8000, function () {
    console.log('Restaurante en puerto 8000!');
  });