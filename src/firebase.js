import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
    apiKey: 'AIzaSyDVE3tOo7EiQz-qPvgc-qiWISb1QrZ84GQ',
    authDomain: 'artisanoga-8da9f.firebaseapp.com',
    projectId: 'artisanoga-8da9f',
    storageBucket: 'artisanoga-8da9f.appspot.com',
    messagingSenderId: '731709069182',
    appId: '1:731709069182:web:1827e9f66cd833e8fdc52f',
}

// Initialize Firebaseconst firebaseApp = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseApp)

export const requestForToken = () => {
    return getToken(messaging, {
        vapidKey: import.meta.env.VITE_REPLACE_WITH_YOUR_VAPID_KEY,
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken)
                // Perform any other neccessary action with the token
            } else {
                // Show permission request UI
                console.log(
                    'No registration token available. Request permission to generate one.'
                )
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err)
        })
}
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload)
        })
    })
