firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    //console.log(user);
    if (user) {
      // User is signed in.
      document.querySelector("#user-view").style.display = "none";
      document.querySelector("#login-view").style.display = "block";
      
      var user = firebase.auth().currentUser;

      if(user != null){
        var emailId = user.email;
        //alert("Bienvenid@ " + emailId);
      }
    } else {
      // No user is signed in.
      document.querySelector("#user-view").style.display = "block";
      document.querySelector("#login-view").style.display = "none";
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

//location.replace()
// VISTAS
// home-section
// profile-section
// friends-section

// let historyObj = window.history;
// console.log(historyObj);

// const homePage = document.querySelector('#home-section');
// const profilePage = document.querySelector('#profile-section');
//const friendsPage = document.querySelector('#friends-section');

const homePage =  `<div class="row">
                    <div class="col s12 m6">
                        <div class="card blue">
                        <div class="card-content white-text">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#" class="indigo-text darken-4 dark">Editar</a>
                            <a href="#" class="red-text">Borrar</a>
                        </div>
                        </div>
                    </div>
                  </div>`;


const profilePage = `<h4 class="center"> PROFILE </h4>
                        <ul class="collection center"">
                            <img id="profile-img" src="img/profile_photo.png" alt="" class="circle col s4">
                            <li class="collection-item avatar">
                                <span class="title">User name</span>
                                <p> email@domine.com </p>
                                <P> pas245&/</P>
                            </li>
                        </ul> `;
const friendsPage = `<ul class="collection center"">
                        <img id="profile-img" src="img/profile_photo.png" alt="" class="circle col s4">
                        <li class="collection-item avatar">
                            <span class="title">User name</span>
                            <p> email@domine.com </p>
                            <P> pas245&/</P>
                        </li>
                    </ul> `;

const routes = {
  'home': homePage,
  'profile': profilePage,
  'friends': friendsPage
};

console.log(window.location.pathname);
// console.log(location.hostname);
//console.log(location);



let contentSection = document.querySelector('#home-section');
//console.log(routes['/']);
contentSection.innerHTML = routes['home']
//contentSection.innerHTML = routes[window.location.pathname];
window.history.pushState({},"home", window.location.pathname + 'home' );

// let onNavItemClick = (pathName) => {
//   window.history.pushState(
//     {}, 
//     pathName,
//     window.location.origin + pathName
//   );

//   contentDiv.innerHTML = routes[pathName];
// }