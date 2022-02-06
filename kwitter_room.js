
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBiXCVScWFyZlxump5tLenaZT2oyVuZvMs",
      authDomain: "kwitter-23dc7.firebaseapp.com",
      databaseURL: "https://kwitter-23dc7-default-rtdb.firebaseio.com",
      projectId: "kwitter-23dc7",
      storageBucket: "kwitter-23dc7.appspot.com",
      messagingSenderId: "771991008052",
      appId: "1:771991008052:web:539371791bc351cbb8eb61",
      measurementId: "G-2PQLXPRF8E"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
