const radius = parseInt(document.getElementById('radius').value) * 1000;
const minRating = parseFloat(document.getElementById('minRating').value);

const request = {
  location: userLocation,
  radius: radius,
  type: ['car_repair']
};

const service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, (results, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      if (results[i].rating >= minRating) {
        new google.maps.Marker({
          map: map,
          position: results[i].geometry.location,
          title: results[i].name
        });
      }
    }
  }
});
let map;
function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
  
      const map = new google.maps.Map(document.getElementById("map"), {
        center: userLocation,
        zoom: 15,
      });
  
      new google.maps.Marker({
        position: userLocation,
        map,
        title: "You are here",
      });
  
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          location: userLocation,
          radius: 3000,
          type: ["car_repair"], // or 'mechanic'
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              new google.maps.Marker({
                position: results[i].geometry.location,
                map: map,
                title: results[i].name,
              });
            }
          } else {
            console.error("Nearby search failed: " + status);
          }
        }
      );
    });
  }
  

function findMechanics() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap, () => {
      alert("Failed to get your location.");
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}


