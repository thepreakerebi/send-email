// variables
const sendBtn = document.getElementById('sendBtn'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message'),
        resetBtn = document.getElementById('resetBtn'),
        sendForm = document.getElementById('email-form');





// eventlisteners

eventListeners();

function eventListeners() {
    // App init
    document.addEventListener('DOMContentLoaded', appInit);

    // validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // send email and reset button
    sendForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm); 
}




// functions

// app initialization
function appInit() {
        // disable send button on load
        sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // show the email image;
    const showEmail = document.createElement('img');
    showEmail.src = 'img/mail.gif';
    showEmail.style.display = 'block';
    

    // hide spinner then show the email image
    setTimeout(function() {
        // hide the spinner
        spinner.style.display = 'none';

        // show email image
        document.querySelector('#loaders').appendChild(showEmail);

        // after 5 seconds hide image and reset the form
        setTimeout(function() {
            sendForm.reset();
            showEmail.remove();
        }, 5000)
    }, 3000)

}

// validate the fields
function validateField() {
    let errors;

    // validate the length of the field
    validateLength(this);

    // validate the email
    if(this.type === "email") {
        validateEmail(this)
    }

    // both will return errors, then check if there are any errors
    errors =  document.querySelectorAll('.error');

    // check that the input are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0) {
            // the button should be enabled
            sendBtn.disabled = false;
        }
    }
    
}

// validat the length of the fields
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// validate the email field
function validateEmail(field) {
    let emailText = field.value;

    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


// reset the form
function resetForm() {
    sendForm.reset()
}

