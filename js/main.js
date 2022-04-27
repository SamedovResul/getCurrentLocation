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
    
    let coordinat ={
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    // let a = position.coords.latitude + ',' + position.coords.longitude;
    // alert(a)
    const socket = io('wss://wakemeup-app.herokuapp.com', { transports : ['websocket'] });
    socket.emit("device", coordinat)
    console.log(a)
  }
  getLocation()
  
  
  // alert(coordinat);
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


