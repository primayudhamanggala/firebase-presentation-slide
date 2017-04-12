// const express   = require('express'),
const firebase  = require('firebase')
//       app       = express()
// var   port      = process.env.PORT || 3000;

// app.use(express.static(_dirname + '/public'))

var config = {
  apiKey: "AIzaSyA63RGgIoHkECs62_gleYqOJVyUeLJn5ag",
  authDomain: "presentation-remote-control.firebaseapp.com",
  databaseURL: "https://presentation-remote-control.firebaseio.com",
  projectId: "presentation-remote-control",
  storageBucket: "presentation-remote-control.appspot.com",
  messagingSenderId: "644410959839"
};

firebase.initializeApp(config);

//to write file
function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

writeUserData(1, 'baru', 'yudha@email.com')

// app.listen(port, () => {
//   console.log('Connected');
// })
