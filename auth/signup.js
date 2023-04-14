function onSignUp(e){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value



    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    alert("account registered")
    // ...
    })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

document.getElementById("signupBtn").addEventListener("click", onSignUp)