let coordinat = {
  lat:'',
  lng:''
}

setInterval(() => {
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    coordinat ={
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
  // a = position.coords.latitude + ',' + position.coords.longitude;
  
  // alert(a);
  }
  const socket = io('ws://localhost:5000', { transports : ['websocket'] });
  socket.emit("device", coordinat)
  console.log(coordinat)
}, 2000);

// function getLocation() {
//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//       alert("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   coordinat ={
//     lat: position.coords.latitude,
//     lng: position.coords.longitude
//   }
// // a = position.coords.latitude + ',' + position.coords.longitude;

// // alert(a);
// }
// getLocation()

// const socket = new WebSocket('ws://localhost:5000');

// let coords = {
//   lat:40.376435,
//   lng:49.815670
// }


