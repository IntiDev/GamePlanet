firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    //console.log(user);
    if (user) {
      // User is signed in.
      document.querySelector('#user-view').style.display = 'none';
      document.querySelector('#login-view').style.display = 'block';
      
      var user = firebase.auth().currentUser;

      if(user != null){
        var emailId = user.email;
        //alert('Bienvenid@ ' + emailId);
      }
    } else {
      // No user is signed in.
      document.querySelector('#user-view').style.display = 'block';
      document.querySelector('#login-view').style.display = 'none';
    }
});
  

function login () {
    console.log('login');
    let userEmail = document.querySelector('#email_field').value;
    let userPassword = document.querySelector('#password_field').value;
    //console.log( userEmail + userPassword);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.error('Error: ' + errorMessage);
    });
}

function logout () {
  console.log('bye');
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('Regresa pronto');
  }); 
}

//location.replace()
// VISTAS
// home-section
// profile-section
// friends-section

// let historyObj = window.history;
// console.log(historyObj);

const homePage =  `<div class='row'>
                    <div class='col s12 m6'>
                        <div class='card blue'>
                        <div class='card-content white-text'>
                            <span class='card-title'>Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class='card-action'>
                            <a href='#' class='indigo-text darken-4 dark'>Editar</a>
                            <a href='#' class='red-text'>Borrar</a>
                        </div>
                        </div>
                    </div>
                  </div>`;


const profilePage = `<h4 class='center'> PROFILE </h4>
                        <ul class='collection center''>
                            <img id='profile-img' src='img/profile_photo.png' alt='' class='circle col s4'>
                            <li class='collection-item avatar'>
                                <span class='title'>User name</span>
                                <p> email@domine.com </p>
                                <P> pas245&/</P>
                            </li>
                        </ul> `;
const friendsPage = `<ul class='collection'>
                      <li class='collection-item avatar'>
                          <img src='img/friend1_photo.png' alt='' class='circle'>
                          <span class='title'>User name</span>
                          <p> 
                              Description
                          </p>
                          <a href='#!' class='secondary-content'><i class='material-icons'>grade</i></a>
                      </li>

                      <li class='collection-item avatar'>
                          <img src='img/friend2_photo.png' alt='' class='circle'>
                          <span class='title'>User name</span>
                          <p> 
                              Description
                          </p>
                          <a href='#!' class='secondary-content'><i class='material-icons'>grade</i></a>
                      </li>

                      <li class='collection-item avatar'>
                          <img src='img/friend3_photo.png' alt='' class='circle'>
                          <span class='title'>User name</span>
                          <p> 
                              Description
                          </p>
                          <a href='#!' class='secondary-content'><i class='material-icons'>grade</i></a>
                      </li>
                    </ul>  `;

const routes = {
  'home': homePage,
  'profile': profilePage,
  'friends': friendsPage
};

//console.log(window.location.pathname);
// console.log(location.hostname);
//console.log(location);

let contentSection = document.querySelector('#home-section');
contentSection.innerHTML = routes['home'];
window.history.pushState({},'home', window.location.pathname + 'home' );

// let onNavItemClick = (pathName) => {
//   window.history.pushState(
//     {}, 
//     pathName,
//     window.location.origin + pathName
//   );

//   contentDiv.innerHTML = routes[pathName];
// }

const goHome = document.querySelector('#go-home');
const goProfile = document.querySelector('#go-profile');
const goFriends = document.querySelector('#go-friends');

goHome.addEventListener('click', showContent);
goProfile.addEventListener('click', showContent);
goFriends.addEventListener('click', showContent);

//console.log(goHome.dataset.name);

function cleanPath (url) {
  let arrayUrl = url.split('/');
  
  return arrayUrl.slice(0,arrayUrl.length -1).join('/') + '/';
}

function showContent (event) {
  const dataSection = event.target.dataset.name;

  switch (dataSection) {
    case 'home':
      contentSection.innerHTML = routes['home']
      window.history.pushState({},'home', cleanPath(window.location.pathname) + 'home' );
      break;''
    case 'profile':
      contentSection.innerHTML = routes['profile']
      window.history.pushState({},'profile', cleanPath(window.location.pathname) + 'profile' );
      break;
    case 'friends':
      contentSection.innerHTML = routes['friends']
      window.history.pushState({},'friends', cleanPath(window.location.pathname) + 'friends' );
      break;
    default:
      console.log('Error');
      break;
  }
  
  
}
