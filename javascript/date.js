// Prints the current date
document.getElementById("date").innerHTML = date;

setInterval(function(){
  var date = new Date();
  document.getElementById("date").innerHTML = date;
}, 1000);
