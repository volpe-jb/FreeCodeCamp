$(document).ready(function() {
  getLocation()
 
  function getLocation() {
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#test").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
 }  
}
}
