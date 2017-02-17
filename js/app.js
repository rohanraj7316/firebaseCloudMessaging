// Initialize Firebase
var config = {
    apiKey: "AIzaSyBpG39-6VhI05t6ABWLHQwDIOP5dKAjB-E",
    authDomain: "demopushapplication.firebaseapp.com",
    databaseURL: "https://demopushapplication.firebaseio.com",
    storageBucket: "demopushapplication.appspot.com",
    messagingSenderId: "914667865343"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.requestPermission().then(
    function () {
        console.log('Have Grant');
        return messaging.getToken().then(function(token){
            console.log('token:',token);
        }).catch(function (err) {
            console.log("error in token generation",err);
        });
    }
).catch(
    function (err) {
        console.log('no access');
    }
);
messaging.onMessage(function(payload){
  console.log('onMessage: ',payload);
    });