//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAkYqPSUnuvBR9o0esFy2OpH3TS8b4YTDU",
    authDomain: "kwitter-6eff3.firebaseapp.com",
    databaseURL: "https://kwitter-6eff3-default-rtdb.firebaseio.com",
    projectId: "kwitter-6eff3",
    storageBucket: "kwitter-6eff3.appspot.com",
    messagingSenderId: "81864546566",
    appId: "1:81864546566:web:3ae3ebe1c65818b3902687"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    console.log("user name = " + user_name);
}