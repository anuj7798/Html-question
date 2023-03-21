function checkEmpty() {
    const field = document.getElementById("field").value;
    if (field.trim() === "") {
      const messageDisplay = document.getElementById("message");
      messageDisplay.innerText = "Please enter some text";
      return false;
    }
    return true;
  }
  