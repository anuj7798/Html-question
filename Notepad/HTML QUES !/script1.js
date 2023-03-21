function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = Math.floor(ageInDays / 365);
    const ageInMonths = Math.floor((ageInDays % 365) / 30);
    const ageInDaysRemaining = Math.floor((ageInDays % 365) % 30);
    const ageDisplay = document.getElementById("age");
    ageDisplay.innerText = `${ageInYears} years, ${ageInMonths} months, and ${ageInDaysRemaining} days`;
  }
  