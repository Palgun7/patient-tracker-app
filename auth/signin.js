
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

console.log("Firebase Running");
console.log("Details", firebase);


// signup function

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let radioButtonValue = undefined;
    let buttons = document.getElementById("gender");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked == true) {
            radioButtonValue = buttons[i];
        }
    }
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;



    let auth =    firebase.auth();

    auth.createUserWithEmailAndPassword(email,password)
    .then(function(data){

        localStorage.setItem("user", JSON.stringify(data.user));
           
       })
       
       .catch(function(error){
           console.log(error.message);
       })

   
       });


firebase.auth().onAuthStateChanged( function(user){
    if(user){
        window.location.href = "../dashboard.html";
    }
    else{
        console.log("Logged Out!");
    }
});