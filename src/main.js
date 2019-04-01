firebase.initializeApp(config);

function loadSection() {

}//loadSection

window.onload = loadSection;

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.querySelector('#user-view').style.display = 'none';
    document.querySelector('#login-view').style.display = 'block';

    let user = firebase.auth().currentUser;

    if (user != null) {
      let emailId = user.email;
      //alert('Bienvenid@ ' + emailId);
    }
  } else {
    // No user is signed in.
    document.querySelector('#user-view').style.display = 'block';
    document.querySelector('#login-view').style.display = 'none';
  }
});





//location.replace()
// VISTAS
// home-section
// profile-section
// friends-section

// let historyObj = window.history;
// console.log(historyObj);


const routes = {
  'home': homePage,
  'profile': profilePage,
  'friends': friendsPage
};

let contentSection = document.querySelector('#home-section');
//contentSection.innerHTML = routes[window.location.pathname];
window.history.pushState({}, 'home', cleanPath(window.location.pathname) + 'home');
console.log(window.location.pathname.split("/"));
contentSection.innerHTML = routes[window.location.pathname.split("/").slice(-1)];



const goHome = document.querySelector('#go-home');
const goProfile = document.querySelector('#go-profile');
const goFriends = document.querySelector('#go-friends');

goHome.addEventListener('click', showContent);
goProfile.addEventListener('click', showContent);
goFriends.addEventListener('click', showContent);

//console.log(goHome.dataset.name);

function cleanPath(url) {
  let arrayUrl = url.split('/');
  //console.log(arrayUrl.slice(0,arrayUrl.length -1).join('/') + '/');
  return arrayUrl.slice(0, arrayUrl.length - 1).join('/') + '/';
}

function showContent(event) {
  const dataSection = event.target.dataset.name;

  switch (dataSection) {
    case 'home':
      contentSection.innerHTML = routes['home']
      window.history.pushState({}, 'home', cleanPath(window.location.pathname) + 'home');
      break; ''
    case 'profile':
      contentSection.innerHTML = routes['profile']
      window.history.pushState({}, 'profile', cleanPath(window.location.pathname) + 'profile');
      break;
    case 'friends':
      contentSection.innerHTML = routes['friends']
      window.history.pushState({}, 'friends', cleanPath(window.location.pathname) + 'friends');
      break;
    default:
      console.log('Error');
      break;
  }


} //showContent


function logout() {
  console.log('bye');
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log('Regresa pronto');
  });
}


function login() {
  console.log('login');
  let userEmail = document.querySelector('#email_field').value;
  let userPassword = document.querySelector('#password_field').value;
  //console.log( userEmail + userPassword);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.error('Error: ' + errorMessage);
  });
}