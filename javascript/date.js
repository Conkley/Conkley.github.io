// Prints the current date
var date = new Date();
setInterval(function(){ 
  document.getElementById("date").innerHTML = date;
}, 1000);
