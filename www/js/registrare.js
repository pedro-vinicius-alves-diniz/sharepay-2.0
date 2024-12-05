const btnRegistro = document.getElementById('btn-registro');
const btnHaveAccount = document.getElementById("btn-have-account")

const nameInput = document.getElementById('iname');
const lasInput = document.getElementById('ilastname');
const nascLabel = document.getElementById("label-register");
const nascInput = document.getElementById('idatanasc');
const emailInput = document.getElementById('iemail');
const passwordInput = document.getElementById('ipassword');
const checkInput = document.getElementById('icheck');

btnRegistro.addEventListener('click', (event) => {
    event.preventDefault();

    if (nameInput.value == '') {
        nameInput.style.border = '2px solid red';
        nameInput.style.outlineColor = 'red';
        nameInput.classList.add('warn-input');
        nameInput.classList.add('animation');

        console.log('Compila l`email per accedere!');
        setTimeout(() => {
            nameInput.classList.remove('animation');
        }, 500)
    } if (lasInput.value == '') {
        lasInput.style.border = '2px solid red';
        lasInput.style.outlineColor = 'red';
        lasInput.classList.add('warn-input');
        lasInput.classList.add('animation');

        console.log('Compila l`email per accedere!');
        setTimeout(() => {
            lasInput.classList.remove('animation');
        }, 500)
    } if (nascInput.value == '') {
        nascInput.style.border = '2px solid red';
        nascInput.style.outlineColor = 'red';
        nascInput.classList.add('warn-input');
        nascInput.classList.add('animation');
        nascLabel.classList.add('animation');

        console.log('Compila l`email per accedere!');
        setTimeout(() => {
            nascInput.classList.remove('animation');
            nascLabel.classList.remove('animation');
        }, 500)
    } if (emailInput.value == '') {
        emailInput.style.border = '2px solid red';
        emailInput.style.outlineColor = 'red';
        emailInput.classList.add('warn-input');
        emailInput.classList.add('animation');

        console.log('Compila l`email per accedere!');
        setTimeout(() => {
            emailInput.classList.remove('animation');
        }, 500)
    } if (passwordInput.value == '') {
        passwordInput.style.border = '2px solid red';
        passwordInput.style.outlineColor = 'red';
        passwordInput.classList.add('warn-input');
        passwordInput.classList.add('animation');
        console.log('Compila l`email per accedere!');
        setTimeout(() => {
            passwordInput.classList.remove('animation');
        }, 500)
    } else if (!checkInput.checked) {
        alert('Per continuare devi accettare i termini e condizioni.')
    } else {
        //TODO: CONTROLLARE SE L'EMAIL INSERITO È GIÀ REGISTRATO
        //TODO: SE L'EMAIL NON È GIÀ REGISTRATO, AGGIUNGERE I DATI INSERITI SU FIRESTORE
        alert("Registro realizzato con successo!")
        window.location.href = 'index.html';
    }
}) 

btnHaveAccount.addEventListener("click", () => {
    window.location.href = "index.html"
})