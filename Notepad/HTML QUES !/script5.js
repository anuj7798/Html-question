function validatePhoneNumber() {
    const phone = document.getElementById("phone").value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      const messageDisplay = document.getElementById("message");
      messageDisplay.innerText = "Please enter a valid 10 digit phone number.";
      return false;
    }
    return true;
  }
  