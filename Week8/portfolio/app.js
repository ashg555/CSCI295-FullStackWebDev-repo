

// smooth scrolling code adapted from w3schools
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // scrolls for 600 milliseconds
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 600, function(){

        // Add hash (#) to URL when done scrolling
        history.replaceState(null, null, hash)
      });
    } // End if
  });
});

// Code to check if the form has been filled out
function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["subject"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  }

  if (message == "") {
    alert("Message should not be empty");
    return false;
  }

  alert("Message '" + message + "' submitted successfully! (disclaimer: this doesn't actually submit anything)");
}

// Code that allows you to look closely at the project screenshots
function openFullscreen(imageId) {
  var img = document.getElementById(imageId);
  var fullscreenImg = document.getElementById("fullscreenImage");
  fullscreenImg.src = img.src;

  var overlay = document.getElementById("fullscreenOverlay");
  overlay.style.display = "flex";
}

function closeFullscreen() {
  var overlay = document.getElementById("fullscreenOverlay");
  overlay.style.display = "none"; // hides the fullscreen image
}

document.addEventListener('keydown', function(event) {
  // also close the overlay on pressing escape
  if (event.key === "Escape") {
      closeFullscreen();
  }
});