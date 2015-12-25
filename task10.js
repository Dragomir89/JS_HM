


function validateName1(){
    var fName = document.getElementById('name');
    var name = fName.value;
    var isValidName = name.match(/^[A-Z][a-z]{1,14}$/g);
    fName.className = isValidName ? 'correctInput' : 'invalidInput';
}

function validateName2(){            // znam 4e ne trqbva da se povtarq kod ama ....
    var lName = document.getElementById('name2');
    var name = lName.value;
    var isValidName = name.match(/^[A-Z][a-z]{1,14}$/g);
    lName.className = isValidName ? 'correctInput' : 'invalidInput';
}

function validatePhone(){
    var phone = document.getElementById('phone');
    var number = phone.value;
    var isValidName = number.match(/^\d{8,11}$/g);
    phone.className = isValidName ? 'correctInput' : 'invalidInput';
}

function validateEmail(){
    var email = document.getElementById('email');
    var emailVal = email.value;
    var isValidEmail = emailVal.match(/^\w+\.?@[A-z]+\.[A-z]+$/);
    email.className = isValidEmail ? 'correctInput' : 'invalidInput';

}

