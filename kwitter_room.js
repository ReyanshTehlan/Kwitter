
const firebaseConfig = {
      apiKey: "AIzaSyBbHD8xY1ekNT1BR3uR9_qHEcOj3KRS5VA",
      authDomain: "kwitter-cc4c6.firebaseapp.com",
      databaseURL: "https://kwitter-cc4c6-default-rtdb.firebaseio.com",
      projectId: "kwitter-cc4c6",
      storageBucket: "kwitter-cc4c6.appspot.com",
      messagingSenderId: "690956354252",
      appId: "1:690956354252:web:646de4d6b29068f0247869"
    };
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }

    function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey
      console.log("Room Nmae - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
