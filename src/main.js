// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAl-oRWi6b4nmvuDZgvDsjZiG9ZIKihW_8",
    authDomain: "gameplanet-2a419.firebaseapp.com",
    databaseURL: "https://gameplanet-2a419.firebaseio.com",
    projectId: "gameplanet-2a419",
    storageBucket: "gameplanet-2a419.appspot.com",
    messagingSenderId: "793786043677"
  };

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    //console.log(user);
    
    if (user) {
      // User is signed in.
      document.querySelector("#user_view").style.display = "none";
      document.querySelector("#login_view").style.display = "block";
    } else {
      // No user is signed in.
      document.querySelector("#user_view").style.display = "block";
      document.querySelector("#login_view").style.display = "none";
    }
});
  

function login () {
    //console.log("login");
    let userEmail = document.querySelector("#email_field").value;
    let userPassword = document.querySelector("#password_field").value;
    //console.log( userEmail + userPassword);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.error("Error: " + errorMessage);
        
    });
}