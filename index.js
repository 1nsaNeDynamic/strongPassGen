const passwordLength = document.getElementById('passwordLength');
const includeSymbols = document.getElementById('includeSymbols');
const includeUppercase = document.getElementById('includeUppercase');
const passwordBox = document.getElementById('passwordBox');
const generatePasswordButton = document.getElementById('generatePasswordButton');


function generatePassword() {
    let passwordLengthValue = passwordLength.value;
    let includeSymbolsChecked = false;
    let includeUppercaseChecked = false
    
    let alphaChars = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numericChars = '1234567890';
    let symbolChars = '!@#$%*';

    let passwordChars = alphaChars + numericChars;

    let password = '';
    
    
    if (includeSymbols.checked == 1){
        includeSymbolsChecked = true;
        passwordChars += symbolChars
    } 
    if (includeUppercase.checked == 1){
        includeUppercaseChecked = true;
        passwordChars += uppercaseChars;
    }

    
    var i = 0;
    for (i == 0; i < Number(passwordLengthValue); i++){
        let randomDigit = Math.floor(Math.random() * passwordChars.length);
        let randomChar = passwordChars[randomDigit];

        password += randomChar;
    }
    
    passwordBox.value = password;


}


document.addEventListener("keypress", function (event){
    if (event.keyCode == 13){

        generatePassword();
    }
})