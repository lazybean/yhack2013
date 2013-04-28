function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(22.047777,121.548074),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;