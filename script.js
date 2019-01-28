let code = document.querySelector('.afficher_code');
var image = document.getElementById('image');
var image2 = document.getElementById('images');

function hiddencode() {

    if (image.style.visibility == 'visible') {
        var img = new Image();


        img.addEventListener('load', function () {

        });


        img.src = 'images/debut_code.png';
        img.src = 'images/main.png';
        image.style.display = 'none'
        image.style.visibility = 'hidden';

    }
    else {

        image.style.visibility = 'visible';
        image.style.display = 'block'
    }

}

function hiddenjdr() {

    if(image2.style.visibility=='visible')
    {
    
        image2.style.visibility = 'hidden';

        image2.style.display = 'none';

    }
        else
        {

            image2.style.visibility = 'visible';

            image2.style.display = 'block';

        }
    
}
    var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 