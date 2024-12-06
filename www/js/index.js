// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, getDoc } from "../../node_modules/firebase/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9oyMrynbcxgiCC1OUoz9nHevvxuvIBJc",
    authDomain: "sharepay-abffa.firebaseapp.com",
    projectId: "sharepay-abffa",
    storageBucket: "sharepay-abffa.firebasestorage.app",
    messagingSenderId: "396784972724",
    appId: "1:396784972724:web:e66be805ac4174153138e1",
    measurementId: "G-R3N32Q2NEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// DECLARING VARIABLES 
const btnAccedere = document.getElementById("btn-accedere");
const emailInput = document.getElementById('iemail');
const passwordInput = document.getElementById('ipassword');
const btnRegistrare = document.getElementById("btn-registrare")
var emailExists = 0
var utente = null



// EVENTS
// TODO: DO EVENT INPUTS FOCUS

// EVENT WHEN LOGIN BUTTON IS CLICKED
btnAccedere.addEventListener("click", () => {
    event.preventDefault();

    checkInputs();
})


// REGISTER BUTTON EVENT
btnRegistrare.addEventListener("click", function () {
    window.location.href = 'registrare.html'
})



// FUNCTIONS
// FUNCTION CHECK IF THE INPUTS ARE EMPTY
function checkInputs() {
    if (emailInput.value == '') { // IF EMAIL INPUT IS EMPTY D0

        emailInput.style.border = '2px solid red';
        emailInput.style.outlineColor = 'red';
        emailInput.classList.add('warn-input');
        emailInput.classList.add('animation');

        console.log('Compila l`email per accedere!');

        setTimeout(() => {
            emailInput.classList.remove('animation');
        }, 500)
    } if (passwordInput.value == '') { // IF PASSWORD INPUT IS EMPTY DO
        passwordInput.style.border = '2px solid red';
        passwordInput.style.outlineColor = 'red';
        passwordInput.classList.add('warn-input');
        passwordInput.classList.add('animation');

        console.log('Compila la password per accedere!');
        setTimeout(() => {
            passwordInput.classList.remove('animation');
        }, 500)
    } else {

        checkEmail();
    }
}

// FUNCTION CHECK EMAIL IS REGISTRED
async function checkEmail() {
    const querySnapshot = await getDocs(collection(db, "utenti"));

    querySnapshot.forEach((doc) => {
        utente = doc
        if (utente.id == emailInput.value) { // IF THE EMAIL IS REGISTRED
            emailExists += 1
        }
    });
    console.log(emailExists)

    if (emailExists == 1) {
        checkPassword(utente)
        emailExists = 0
    } else {
        console.log("Email o password sbagliate. 1")
        alert("Email o password sbagliate.");
    }
};

// FUNCTION CHECK IF THE PASSWORD IS CORRECT
function checkPassword(doc) {
    if (doc.data().password == passwordInput.value) {
        window.location.href = 'home.html';
        alert("Login realizzato con successo!");
    } else {
        passwordInput.value = "";
        passwordInput.focus();
        console.log("Email o password sbagliate. 2")
        alert("Email o password sbagliate.");
    }
}

