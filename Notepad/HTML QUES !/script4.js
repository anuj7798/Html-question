function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z]{2})(?=.*[A-Z]{2})(?=.*\d{2})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      const messageDisplay = document.getElementById("message");
      messageDisplay.innerText = "Password must contain minimum 8 characters, 2 uppercase letters, 2 lowercase letters, 1 symbol, and 2 digits.";
      return false;
    }
    return true;
  }
  