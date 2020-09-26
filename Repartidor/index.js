var express = require('express');
var path = require('path');
const request = require('request');
const fs = require('fs');
//var pedidos = [];
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
    let rawdata = fs.readFileSync('../pedidos.json');
    let json = JSON.parse(rawdata); 
    res.render('home', { msm:'',pedido : json});

});

//Metodo POST para entregar pedido
app.post('/', function (req, res) { 
    
    let rawdata = fs.readFileSync('../pedidos.json');
    let json = JSON.parse(rawdata);

    var no = req.body.id;
    for (let key in json) {
        if (json[key].conta == no) {
            json[key].estado = "Entregado";
            break;
        }
    }
//    res.render('home', { msm:'',pedido : pedidos});

    
    //json.push(data);
    fs.writeFile ("../pedidos.json", JSON.stringify(json), function(err) {
        if (err) throw err;
            console.log('Agragado');            
            res.render("home",{ pedido : json , msm:'Agregado'});
        }
    );
    
});
//Metodo POST para recibir pedidos
app.post('/ingreso', function (req, res) {
    var data = req.body;
    let rawdata = fs.readFileSync('../pedidos.json');
    let json = JSON.parse(rawdata);
    json.push(data);
    fs.writeFile ("../pedidos.json", JSON.stringify(json), function(err) {
        if (err) throw err;
            console.log('Pedido Agregado');            
            res.status(200).send("OK");
        }
    );
    
    //pedidos.push(req.body);

    //console.log(pedidos);
    
    //res.status(200).json({status:200,pedido:pedidos});
});

//Puerto 3000 donde se inicia el server
app.listen(8080, function () {
    console.log('Repartidor en puerto 8080!');
  });