// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcK2yseB_MNDuKzKdO6vxsPN9DfQYWcWM",
    authDomain: "team02-project.firebaseapp.com",
    projectId: "team02-project",
    storageBucket: "team02-project.appspot.com",
    messagingSenderId: "558609617599",
    appId: "1:558609617599:web:4461cdad3cafe26b68ac0a",
    measurementId: "G-6V9W5WHK5F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();