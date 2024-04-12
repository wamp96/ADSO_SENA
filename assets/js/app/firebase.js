  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCd2h5kwIqy9kUnlr7ekBawl54EaPMGHoI",
    authDomain: "login-firebase-af0ef.firebaseapp.com",
    projectId: "login-firebase-af0ef",
    storageBucket: "login-firebase-af0ef.appspot.com",
    messagingSenderId: "704943489467",
    appId: "1:704943489467:web:827cbd662cac7e4ff0849e"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);