
  var images = [], x = -1;
  images[0] = "stylesheets/Images/profile.jpg";
  images[1] = "stylesheets/Images/profile.jpg";
  
  function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
  }

  function startTimer() {
    setInterval(displayNextImage, 10000);
  }
  
 // function reloadFunction() {
  // location.reload();
//  }