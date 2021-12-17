
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFxrOMB7Nf2oy3QFtze588jkliJMa5t-g",
  authDomain: "let-s-chat-web-app-fbab5.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-fbab5-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-fbab5",
  storageBucket: "let-s-chat-web-app-fbab5.appspot.com",
  messagingSenderId: "694569303764",
  appId: "1:694569303764:web:9f4b286de58917f2170541"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Chat.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();