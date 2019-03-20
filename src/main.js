firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    //console.log(user);
    
    if (user) {
      // User is signed in.
      document.querySelector("#user_view").style.display = "none";
      document.querySelector("#login_view").style.display = "block";
      
      var user = firebase.auth().currentUser;

      if(user != null){
        var emailId = user.email;
        alert("Bienvenid@ " + emailId);
      }
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

function logout () {
  //console.log("bye");
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Regresa pronto");
    
  }); 
}


let historyObj = window.history;
// console.log(historyObj);