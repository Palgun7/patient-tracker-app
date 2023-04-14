// // Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
    
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'


var config = {
    apiKey: "AIzaSyDQ4Ic9yAYfaexhXCpElPv-DJr2la5ZOxE",
    authDomain: "patienttracker-a460e.firebaseapp.com",
    databaseURL: "https://patienttracker-a460e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "patienttracker-a460e",
    storageBucket: "patienttracker-a460e.appspot.com",
    messagingSenderId: "402200494814",
    appId: "1:402200494814:web:cd2ad0245929a73343f84f"
};

var firebase = initializeApp(config);


// login function
var auth = getAuth();


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email, password);

    signInWithEmailAndPassword(auth ,email,password)
        .then(function(data){

         localStorage.setItem("user", JSON.stringify(data.user));
            
        })
        
        .catch(function(error){
            console.log(error.message);
        })

    
        });

onAuthStateChanged(auth, function(user){
    if(user){
        alert("Existing user logged in successfully!")
        window.location.href = "../dashboard.html";

    }
    
    
});