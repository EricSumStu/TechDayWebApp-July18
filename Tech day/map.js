var table = "";
var txt;
var modal = document.getElementById('myModal');
$.getJSON("talks.json", function (json) {
    var obj = json;
    var z1 = [];
    var z2 = [];
    var z3 = [];
    var z4 = [];
    var z5 = [];
    var z6 = [];
    var z7 = [];

    var myArray = [("Lars Magnus", "1"), ("Reykjavik", "1"), ("Nuuk", "1"), ("Paris", "3"), ("Athlone", "3"),
    ("Demo Room", "4"), ("Kuala Lumpur", "4"), ("Lecture Theatre", "4"), ("Stockholm", "5"), ("Berlin", "5"), ("Helsinki", "5"), ("Rome", "5"),
    ("Wellington", "6"), ("Canberra", "6"), ("Tokyo", "6"), ("Warsaw", "6"), ("Kiev", "6"), ("Moscow", "6"),
    ("Cape Town", "7"), ("Jakarta", "7"), ("Honolulu", "8"), ("Ottowa", "8"), ("Anchorage", "8"), ("Buenos Aires", "9"), 
    ("Brasilia", "9"), ("Washington DC", "9"), ("V.A. Lab", "9")];

    var myArray2 = [("Lars Magnus"), ("Reykjavik"), ("Nuuk"), ("Paris"), ("Athlone"),
    ("Demo Room"), ("Kuala Lumpur"), ("Lecture Theatre"), ("Stockholm"), ("Berlin"), ("Helsinki"), ("Rome"),
    ("Wellington"), ("Canberra"), ("Tokyo"), ("Warsaw"), ("Kiev"), ("Moscow"),
    ("Cape Town"), ("Jakarta", ("Honolulu"), ("Ottowa"), ("Anchorage"), ("Buenos Aires"), 
    ("Brasilia"), ("Washington DC"), ("V.A. Lab"))];

    for (var x = 1; x < 8; x++) {
        var now = new Date().getUTCHours() + 1;
        for (var y = 0; y < (obj.talks).length; y++) {
            for (var key in myArray2) {
                if ((myArray2[key] === obj.talks[y].Location) && (obj.talks[y].Time >= now)) {
                    var zone = myArray[key];
                    if (zone == x) {
                        switch (x) {
                            case (1): { z1.push(obj.talks[y]) }; break;
                            case (2): { z2.push(obj.talks[y]) }; break;
                            case (3): { z3.push(obj.talks[y]) }; break;
                            case (4): { z4.push(obj.talks[y]) }; break;
                            case (5): { z5.push(obj.talks[y]) }; break;
                            case (6): { z6.push(obj.talks[y]) }; break;
                            case (7): { z7.push(obj.talks[y]) }; break;
                        }
                    }
                }
            }
        }
    }

    var z1txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z1.length; x++) {

        var aTitle = z1[x].Title;
        var aTime = z1[x].Time;
        var aLocation = z1[x].Location;

        z1txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z1txt += "</table>";

    var z2txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z2.length; x++) {

        var aTitle = z2[x].Title;
        var aTime = z2[x].Time;
        var aLocation = z2[x].Location
        
        z2txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z2txt += "</table>";

    var z3txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z3.length; x++) {

        var aTitle = z3[x].Title;
        var aTime = z3[x].Time;
        var aLocation = z3[x].Location;

        z3txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z3txt += "</table>";

    var z4txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z4.length; x++) {

        var aTitle = z4[x].Title;
        var aTime = z4[x].Time;
        var aLocation = z4[x].Location;

        z4txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z4txt += "</table>";

    var z5txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z5.length; x++) {

        var aTitle = z5[x].Title;
        var aTime = z5[x].Time;
        var aLocation = z5[x].Location;

        z5txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z5txt += "</table>";

    var z6txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z6.length; x++) {

        var aTitle = z6[x].Title;
        var aTime = z6[x].Time;
        var aLocation = z6[x].Location;

        z6txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z6txt += "</table>";

    var z7txt = '<table><tr><td>Title</td><td>Time</td><td>Location</td></tr>';
    for (var x = 0; x < z7.length; x++) {

        var aTitle = z7[x].Title;
        var aTime = z7[x].Time;
        var aLocation = z7[x].Location;

        z7txt += '<tr><td>' + aTitle + '</td><td>' + aTime + '</td><td>' + aLocation + '</td></tr>';
    }
    z7txt += "</table>";

    window.onload = function () {
        document.getElementById("zone1").innerHTML = z1txt;
        document.getElementById("zone2").innerHTML = z2txt;
        document.getElementById("zone3").innerHTML = z3txt;
        document.getElementById("zone4").innerHTML = z4txt;
        document.getElementById("zone5").innerHTML = z5txt;
        document.getElementById("zone6").innerHTML = z6txt;
        document.getElementById("zone7").innerHTML = z7txt;
    }
});


  

    /* for (var x = 1; x < 8; x++) {
        var now = new Date().getUTCHours() + 1;
        for (var y = 0; y < (obj.talks).length; y++) {
            for (var key in myArray2) {
                if ((myArray2[key] === obj.talks[y].Location) && (obj.talks[y].Time >= now)) {
                    var zone = myArray[key];
                    if (zone == x) {
                        /*  ZoneOneEvents.push(obj.talks[y]);*/
                        /*switch (x) {
                            case (1): { z1.push(obj.talks[y]) }; break;
                            case (2): { z2.push(obj.talks[y]) }; break;
                            case (3): { z3.push(obj.talks[y]) }; break;
                            case (4): { z4.push(obj.talks[y]) }; break;
                            case (5): { z5.push(obj.talks[y]) }; break;
                            case (6): { z6.push(obj.talks[y]) }; break;
                            case (7): { z7.push(obj.talks[y]) }; break;
                        }
                        z6txt += "</table>";

                        window.onload = function () {

                            document.getElementById("zone6").innerHTML = z6txt;
                        }
                    } */
                
