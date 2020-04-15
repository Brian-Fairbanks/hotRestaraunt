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
app.get('/reservationform', function(req, res){
    res.sendFile(path.join(__dirname, "reservationform.html"));
})



//API routes
//====================================================================

//viewReservation route
app.get('/api/reservation', function(req, res){
    return res.json(reservations);
});


//API Posts
app.post("/api/reservation", function(req, res){
    var reservation = req.body;

    console.log(reservation);
    reservations.push(reservation);

    res.send("Thank you, you are now reserved");
})

/* #  Main code
=============================================*/
app.listen(PORT, function(){
    console.log(`App listening on http://localhost:${PORT}`);
})