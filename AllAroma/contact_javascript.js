const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyBHL73d5eKyQNXkJTpWVZNIf0TLN0yTq-E",
    authDomain: "contactform-cd911.firebaseapp.com",
    databaseURL: "https://contactform-cd911-default-rtdb.firebaseio.com",
    projectId: "contactform-cd911",
    storageBucket: "contactform-cd911.appspot.com",
    messagingSenderId: "282339874973",
    appId: "1:282339874973:web:2c3313fd9bd3f9f5d9dc74",
    measurementId: "G-SLTMVHMVM9"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

const ref = database.ref("messages")

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    ref.push({
        A_Name:name,
        B_Email:email,
        C_Message:message
    })
    alert.style.display = "block"

    setTimeout(() => {
        alert.style.display = "none"
    }, 3000);

    form.reset();
    
})