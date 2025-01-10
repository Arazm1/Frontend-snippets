// Random Password Generator


const clickToGenerate = document.getElementById('click-me');
const passwordDiv = document.getElementById("password");


function generatePassword(length, includeLowercase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "01234567890"
    const symbolsChars = "!@#¤%&/()?_-+'*"

    let allowedChars = "";
    let password ="";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars: "";

    //console.log(allowedChars)

    if (length <= 0) {
        return '(Password length must be at least 1)';
    }

    if (allowedChars.length === 0) {
        return '(At least 1 set of characters needs to be selected)'
    }
    

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;


}

const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength,
                                 includeLowercase, 
                                 includeUpperCase, 
                                 includeNumbers, 
                                 includeSymbols)


console.log(`Generated paassword ${password}`)



if (passwordDiv) {
    passwordDiv.textContent = `Generated password: ${password}`;
} else {
    console.error("Div with id 'password' not found.");
}



clickToGenerate.addEventListener('click', () => {
    const password = generatePassword(passwordLength, includeLowercase, includeUpperCase, includeNumbers, includeSymbols);
    console.log(`Generated password: ${password}`);
    if (passwordDiv) {
        passwordDiv.textContent = `Generated password: ${password}`;
    } else {
        console.error("Div with id 'password' not found.");
    }
});
