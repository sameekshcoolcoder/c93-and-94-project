var firebaseConfig = {
      apiKey: "AIzaSyDUCiD-Cf3KAtgiHiasEV9CU_8ozjYTbDY",
      authDomain: "kwitter-232ce.firebaseapp.com",
      databaseURL: "https://kwitter-232ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-232ce",
      storageBucket: "kwitter-232ce.appspot.com",
      messagingSenderId: "803497971500",
      appId: "1:803497971500:web:ce2bf57fe135c5000ca689"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
