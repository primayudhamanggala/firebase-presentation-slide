const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyA63RGgIoHkECs62_gleYqOJVyUeLJn5ag",
  authDomain: "presentation-remote-control.firebaseapp.com",
  databaseURL: "https://presentation-remote-control.firebaseio.com",
  projectId: "presentation-remote-control",
  storageBucket: "presentation-remote-control.appspot.com",
  messagingSenderId: "644410959839"
};


firebase.initializeApp(config);

//to listen
var starCountRef = firebase.database().ref('users/1');
starCountRef.on('value', function(snapshot) {
  // updateStarCount(postElement, snapshot.val());
   console.log("get realtime data : ",snapshot.val());
});
