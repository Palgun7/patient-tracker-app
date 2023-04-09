// // Initialize Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"; 

var config = {
    apiKey: "AIzaSyDQ4Ic9yAYfaexhXCpElPv-DJr2la5ZOxE",
    authDomain: "patienttracker-a460e.firebaseapp.com",
    databaseURL: "https://patienttracker-a460e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "patienttracker-a460e",
    storageBucket: "patienttracker-a460e.appspot.com",
    messagingSenderId: "402200494814",
    appId: "1:402200494814:web:cd2ad0245929a73343f84f"
};

var firebase = firebase.initializeApp(config);


// login function
var auth = firebase.auth();


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);

    auth.signInWithEmailAndPassword(email,password)
        .then(function(data){

         localStorage.setItem("user", JSON.stringify(data.user));
            
        })
        
        .catch(function(error){
            console.log(error.message);
        })

    
        });

auth.onAuthStateChanged(function(user){
    if(user){
        window.location.href = "../dashboard.html";

    }
});