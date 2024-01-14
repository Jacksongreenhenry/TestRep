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

const ref = database.ref("orders")

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const doo = document.getElementById('doo').value;
    const too = document.getElementById('too').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    ref.push({
        A_Name:name,
        B_Phone:phone,
        C_Address:address,
        D_Date:doo,
        E_Time:too,
        F_Email:email,
        G_Message:message
    })
    alert.style.display = "block"

    setTimeout(() => {
        alert.style.display = "none"
    }, 3000);

    form.reset();
    
})