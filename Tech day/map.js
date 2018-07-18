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



$.getJSON("talks.json", function(json) {
var obj = json;
/* List of events*/
/*var ZoneOneEvents =[];*/
var z1 =[];
var z2 =[];
var z3 =[];
var z4 =[];
var z5 =[];
var z6 =[];
var z7 =[];




var myArray = [("Lars Magnus", "1"), ("Reykjavik", "1"), ("Nuuk", "1"), ("Paris", "3"), 
("Demo Room", "4"), ("Kuala Lumpur", "4"), ("Stockholm", "5"), ("Berlin", "5"), ("Helsinki", "5"), ("Rome", "5"),
("Wellington", "6"), ("Canberra", "6"), ("Tokyo", "6"), ("Warsaw", "6"), ("Kiev", "6"), ("Moscow", "6"),
("Cape Town", "7"), ("Jakarta", "7")];

var myArray2 = [("Lars Magnus"), ("Reykjavik"), ("Nuuk"), ("Paris"), 
("Demo Room"), ("Kuala Lumpur"), ("Stockholm"), ("Berlin"), ("Helsinki"), ("Rome"),
("Wellington"), ("Canberra"), ("Tokyo"), ("Warsaw"), ("Kiev"), ("Moscow"),
("Cape Town"), ("Jakarta")];
/*
for (var key in myArray){
    console.log(myArray[key]);
}*/
for (x=1; x<8; x++){
    
for (var y = 0; y < (obj.talks).length;y++){
    for (var key in myArray2){ 
        if (myArray2[key] === obj.talks[y].Location) {
            var zone = myArray[key];        
            if (zone == x){
              /*  ZoneOneEvents.push(obj.talks[y]);*/
        switch(x) {
            case (1): {z1.push(obj.talks[y])}; break;
            case (2): {z2.push(obj.talks[y])}; break;
            case (3): {z3.push(obj.talks[y])}; break;
            case (4): {z4.push(obj.talks[y])}; break;
            case (5): {z5.push(obj.talks[y])}; break;
            case (6): {z6.push(obj.talks[y])}; break;
            case (7): {z7.push(obj.talks[y])}; break;
    }
            }
        }
    }
}
}

/*zone 1*/
var z1txt = '<table><tr><td>"Title"</td><td>"Time"</td></tr>';
for(x=0; x<z1.length; x++){

    var aTitle = z1[x].Title; 
    var aTime = z1[x].Time;  
    
    z1txt +='<tr><td>"'+ aTitle + '"</td><td>"' + aTime +'"</td></tr>';  
}
z1txt += "</table>";

window.onload = function(){
document.getElementById("zone1").innerHTML = z1txt;
}


/*zone 2*/
/*
var z2txt = '<table><tr><td>"Title"</td><td>"Time"</td></tr>';
for(x=0; x<z2.length; x++){

    var aTitle = z2[x].Title; 
    var aTime = z2[x].Time;  
    
    z2txt +='<tr><td>"'+ aTitle + '"</td><td>"' + aTime +'"</td></tr>';  
}
z2txt += "</table>";

window.onload = function(){
document.getElementById("zone2").innerHTML = z2txt;
}*/

/*zone 3*/
/*
var z3txt = '<table><tr><td>"Title"</td><td>"Time"</td></tr>';
for(x=0; x<z3.length; x++){

    var aTitle = z3[x].Title; 
    var aTime = z3[x].Time;  
    
    z3txt +='<tr><td>"'+ aTitle + '"</td><td>"' + aTime +'"</td></tr>';  
}
z3txt += "</table>";

window.onload = function(){
document.getElementById("zone3").innerHTML = z3txt;
}*/



/*
document.getElementById("z2").innerHTML = table;
document.getElementById("z3").innerHTML = table;
document.getElementById("z4").innerHTML = table;
document.getElementById("z5").innerHTML = table;
document.getElementById("z6").innerHTML = table;
document.getElementById("z7").innerHTML = table;
*/
});