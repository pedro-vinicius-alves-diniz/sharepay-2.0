// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js   ";
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
const btnRegistro = document.getElementById('btn-registro');
const btnHaveAccount = document.getElementById("btn-have-account")
const nameInput = document.getElementById('iname');
const lasInput = document.getElementById('ilastname');
const nascLabel = document.getElementById("label-register");
const nascInput = document.getElementById('idatanasc');
const emailInput = document.getElementById('iemail');
const passwordInput = document.getElementById('ipassword');
const checkInput = document.getElementById('icheck');


// EVENTS
btnRegistro.addEventListener('click', (event) => {
    event.preventDefault();

    checkInputs();
})

btnHaveAccount.addEventListener("click", () => {
    window.location.href = "index.html"
})


// FUNCTIONS
// FUNC CHECK INPUTS
function checkInputs() {
    if (nameInput.value == '') {
        nameInput.style.border = '2px solid red';
        nameInput.style.outlineColor = 'red';
        nameInput.classList.add('warn-input');
        nameInput.classList.add('animation');

        setTimeout(() => {
            nameInput.classList.remove('animation');
        }, 500)

    } if (lasInput.value == '') {
        lasInput.style.border = '2px solid red';
        lasInput.style.outlineColor = 'red';
        lasInput.classList.add('warn-input');
        lasInput.classList.add('animation');

        setTimeout(() => {
            lasInput.classList.remove('animation');
        }, 500)

    } if (nascInput.value == '') {
        nascInput.style.border = '2px solid red';
        nascInput.style.outlineColor = 'red';
        nascInput.classList.add('warn-input');
        nascInput.classList.add('animation');
        nascLabel.classList.add('animation');

        setTimeout(() => {
            nascInput.classList.remove('animation');
            nascLabel.classList.remove('animation');
        }, 500)

    } if (emailInput.value == '') {
        emailInput.style.border = '2px solid red';
        emailInput.style.outlineColor = 'red';
        emailInput.classList.add('warn-input');
        emailInput.classList.add('animation');

        setTimeout(() => {
            emailInput.classList.remove('animation');
        }, 500)

    } if (passwordInput.value == '') {
        passwordInput.style.border = '2px solid red';
        passwordInput.style.outlineColor = 'red';
        passwordInput.classList.add('warn-input');
        passwordInput.classList.add('animation');

        setTimeout(() => {
            passwordInput.classList.remove('animation');
        }, 500)

    } else if (!checkInput.checked) {
        alert('Per continuare devi accettare i termini e condizioni.')
    } else {
        checkEmail();
    }
}

// FUNC CHECK EMAIL IS REGISTRED
async function checkEmail() {
    const querySnapshot = await getDocs(collection(db, "utenti"));
    let emailExists = false;

    querySnapshot.forEach((doc) => {
        if (doc.id === emailInput.value) { // Email già registrata
            emailExists = true;
        }
    });

    if (emailExists) {
        emailInput.value = "";
        emailInput.focus();
        alert("Email già registrata.");
    } else {
        checkPassword();
    }
}

//FUNC VALIDATE IF PASSWORD HAS MINIMUM 6 CHARACTERS
async function checkPassword(){
    if(passwordInput.value.length < 6){
        alert("La passoword deve avere nel minimo 6 caratteri");
        passwordInput.value = "";
        passwordInput.focus();
        passwordInput.classList.add('animation');
    }else{
        await addData();
        alert("Registrazione completata con successo.");
        window.location.href = "index.html";
    }
}

// FUNC ADD DATA IN THE DATABASE
async function addData() {

    await setDoc(doc(db, "utenti", emailInput.value.trim()), {
        email: emailInput.value,
        password: encripty(passwordInput.value),
        name: nameInput.value,
        lastname: lasInput.value,
        dateBorn: nascInput.value
    });

    console.log(encripty(passwordInput.value))
};

// FUNC ENCRIPTY PASSWORD
function encripty(password){
    const shaObj = new jsSHA("SHA-256", "TEXT");

    shaObj.update(password);

    return shaObj.getHash("HEX");
}