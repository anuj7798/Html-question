function updateProgress() {
    const progressBar = document.getElementById("progressBar");
    progressBar.value += 10;
    if (progressBar.value === progressBar.max) {
      alert("Progress complete!");
    }
  }
  