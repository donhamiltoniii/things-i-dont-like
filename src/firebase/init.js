import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDDj4uXjUBGZsHd34QtgHtrx8GPtGFBpjI",
    authDomain: "things-i-hate-donny.firebaseapp.com",
    databaseURL: "https://things-i-hate-donny.firebaseio.com",
    projectId: "things-i-hate-donny",
    storageBucket: "things-i-hate-donny.appspot.com",
    messagingSenderId: "359061119739",
    appId: "1:359061119739:web:f9a9519a951227f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()