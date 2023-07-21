// const length = 12;

// const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01213456789!@#$%^&*()';

// function createPassword() {
//     let password = "";
//     password += upperCase[Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     password += number[Math.floor(Math.random() * number.length)];
//     password += symbols[Math.floor(Math.random() * symbols.length)];
//     while (length > password.length) {
//         password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
//     }
//     passwordBox.innerText = password;
// }
// createPassword()


// function copyPassword(){
//     passwordBox.select();
//     document.execCommand('copy')
// }
// generatePass = () =>{
//     let passwordBox = document.querySelector('#password');

//     console.log(passwordBox)

// }
 generatePassword = ()=> {
    const length = 10; // Change the password length as needed
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"; // Characters to include in the password
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      console.log(randomIndex)
      password += charset[randomIndex];
    }
  
    document.getElementById("Password").value = password;
  }
  
   copyPassword =() =>{
    let pass = document.getElementById("Password")
    pass.select();
    document.execCommand('copy')
}