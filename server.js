/* # Dependencies
================================================================*/
var express = require('express');
var path = require('path');


/* # Set up Express App
================================================================*/
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/* # Array Variables
================================================================*/
const reservations=[];
const waitlist = [];



/* # Routes
================================================================*/

//homepage route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

//addReservation route
app.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, "reservationform.html"));
})

//API routes

//API Posts

/* #  Main code
=============================================*/
app.listen(PORT, function(){
    console.log(`App listening on http://localhost:${PORT}`);
})