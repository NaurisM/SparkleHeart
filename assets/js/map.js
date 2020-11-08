function initMap() {

  const place = { lat: 56.947, lng: 24.109 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: place,
  });
  
  const marker = new google.maps.Marker({
    position: place,
    map: map,
  });
}
