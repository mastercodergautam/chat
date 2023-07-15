const firebaseConfig = {
    apiKey: "AIzaSyCRUpoUxBhGiHg9_hMjfvkNyLp0sRJnto8",
    authDomain: "lets-chat-39381.firebaseapp.com",
    databaseURL: "https://lets-chat-39381-default-rtdb.firebaseio.com",
    projectId: "lets-chat-39381",
    storageBucket: "lets-chat-39381.appspot.com",
    messagingSenderId: "764648023204",
    appId: "1:764648023204:web:1026800faabc31b4b87231"
  };
  firebase.initializeApp(firebaseConfig);
  var username=localStorage.getItem("user_name")
  var room_name=localStorage.getItem("roomname")
function send(){
  
  var message=document.getElementById("msg").value ;
  firebase.database().ref(room_name).push({
      name:username,
      message:message,
      like:0

  })
  document.getElementById("msg").value="";
}