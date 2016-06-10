function openFeedback(){
  window.open("http://goo.gl/forms/2vyDQBsAU19zNTR62","_blank");
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("feedbackBtn").addEventListener("click", openFeedback);
});
