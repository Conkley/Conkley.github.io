// Prints the current date
document.getElementById("date").innerHTML = new Date();

setInterval(function(){
  var date = new Date();
  document.getElementById("date").innerHTML = date;
}, 1000);
