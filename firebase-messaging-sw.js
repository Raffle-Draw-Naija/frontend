// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts(
    'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
)

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: 'AIzaSyDVE3tOo7EiQz-qPvgc-qiWISb1QrZ84GQ',
    authDomain: 'artisanoga-8da9f.firebaseapp.com',
    projectId: 'artisanoga-8da9f',
    storageBucket: 'artisanoga-8da9f.appspot.com',
    messagingSenderId: '731709069182',
    appId: '1:731709069182:web:1827e9f66cd833e8fdc52f',
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload)

    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload)

    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
