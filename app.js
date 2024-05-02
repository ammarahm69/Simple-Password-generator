function generateRandomPassword() {
    const display = document.getElementById('password-display');
    const numbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'; // More character options
    let password = "";
    const passwordLength = 6;
    for (let i = 0; i < passwordLength; i++) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    display.value = password;
  }
 
  