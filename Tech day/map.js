<link rel="stylesheet" type="text/css" media="screen" href="talks.json" />
/*

var one = ["Lars Magnus",  "Reykjavik", "Nuuk"];
var three = ["Paris"];
var four = ["Demo Room", "Kuala Lumpur"];
var five = ["Stockholm", "Berlin", "Helsinki", "Rome"];
var six = ["Wellington", "Canberra", "Tokyo", "Warsaw", "Kiev", "Moscow"];
var seven = ["Cape Town", "Jakarta"];

if "Location" = var one
{ 
    zone =1
};*/



var txt
$.getJSON("talks.json", function(json) {
var obj = json;
/* List of events*/
var ZoneOneEvents =[];



var myArray = [("Lars Magnus", "1"), ("Reykjavik", "1"), ("Nuuk", "1"), ("Paris", "3"), 
("Demo Room", "4"), ("Kuala Lumpur", "4"), ("Stockholm", "5"), ("Berlin", "5"), ("Helsinki", "5"), ("Rome", "5"),
("Wellington", "6"), ("Canberra", "6"), ("Tokyo", "6"), ("Warsaw", "6"), ("Kiev", "6"), ("Moscow", "6"),
("Cape Town", "7"), ("Jakarta", "7")];
/*
for (var key in myArray){
    console.log(myArray[key]);
}*/

for (var key in myArray)
{ 
    if key === obj[y].location {
        zone = Array[Key]
    }
    if zone = 1{
        push.ZoneOneEvents;
    }
}

