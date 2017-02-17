importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');


var config = {
    apiKey: "AIzaSyBpG39-6VhI05t6ABWLHQwDIOP5dKAjB-E",
    authDomain: "demopushapplication.firebaseapp.com",
    databaseURL: "https://demopushapplication.firebaseio.com",
    storageBucket: "demopushapplication.appspot.com",
    messagingSenderId: "914667865343"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const title = 'hello i am here';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title,option);
});