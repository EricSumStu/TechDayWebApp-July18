var txt
$.getJSON("talks.json", function(json) {
var obj = json;

 var techDate = new Date("2018-7-16");
 var today = new Date();
 var techDateSmall = techDate.toDateString(0, 10);
 var todaySmall = today.toDateString(0, 10);
  console.log(techDateSmall, todaySmall);
 var nowTime = new Date().getUTCHours() + 1 ;
 var techDay = false;
 if(todaySmall === techDateSmall){
         techDay = true
 };
var countdown = function(){
  // Set the date we're counting down to
  var countDownDate = new Date("Oct 4, 2018 9:00:00").getTime();
     // Update the count down every 1 second
 var x = setInterval(function() {
     // Get todays date and time
  var now = new Date().getTime();
     // Find the distance between now an the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in the element with id="demo"
 document.getElementById("count").innerHTML = "Please come back in:" + '<br>' + days + "d " + hours + "h"
 + minutes + "m " + seconds + "s " + '<br>' + "to see upcoming events";

 // If the count down is finished, write  some text 
 if (distance < 0) {
 clearInterval(x);
 document.getElementById("count").innerHTML = "EXPIRED";
 }
 }, 1000);
};
var table = "";
for (var y = 0; y < (obj.talks).length;y++){
      if(techDay === false){
     countdown()

         }else if(techDay === true && obj.talks[y].Time === nowTime + 1 || obj.talks[y].Time === nowTime ){
             console.log("Tech Day is Today and event is this hour")
             
         var txt = "<table>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";
                 txt += "<td>" + "Title:" + "</td>"
                 txt += "<td>" + (obj.talks[y].Title) + "</td>"
             txt+= "</tr>" 
             txt += "<tr>";   
                     txt += "<td>" + "Time:" + "</td>"
                 txt += "<td>" + (obj.talks[y].Time) + "</td>"
             txt+= "</tr>"   
             txt += "<tr>";   
                 txt += "<td>" + "Location:" + "</td>"  
                 txt += "<td>" + (obj.talks[y].Location) + "</td>"
             txt+= "</tr>"    
             txt += "<tr>"; 
                     txt += "<td>" + "Host:" + "</td>"
                 txt += "<td>" + (obj.talks[y].Host) + "</td>"
             txt+= "</tr>"  
             txt += "<tr>"; 
                     txt += "<td>" +  "Summary:" + "</td>"
                 txt += "<td>" + (obj.talks[y].Summary) + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "<tr>";   
                 txt += "<td>" + "" + "</td>"  
                 txt += "<td>" + "" + "</td>"
             txt+= "</tr>"
             txt += "</table><br>" 
                 table += txt;
     }
     }
 document.getElementById("demo").innerHTML = table;

});


function openSlideMenu() {
document.getElementById('side-menu').style.width = '250px';
document.getElementById('main').style.marginLeft = '250px';
};

function closeSlideMenu() {
document.getElementById('side-menu').style.width = '0';
document.getElementById('main').style.marginLeft = '0';
};