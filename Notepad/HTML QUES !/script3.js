function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const messageDisplay = document.getElementById("message");
      messageDisplay.innerText = "Please enter a valid email address";
      return false;
    }
    return true;
  }
  