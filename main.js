$(document).ready(() => {


  const fade = () => {
    $("#featureSubtitle").fadeIn(3000);
  }

  let titleText = "Full-Stack Engineer";
  let str = '';
  let i = 0;
  let speed = 75;
  let typeCursor = document.getElementById('typeCursor');
  let typeCursorHidden = false;

  // Hide type cursor
  const hideTypeCursor = () => {
    typeCursor.style.display = 'none';
    typeCursorHidden = true;
  }


  //Loop through heading text
  function typeWriter() {
    if (i < titleText.length) {
      document.getElementById('typeHeading').innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      hideTypeCursor();
    }
  }

  fade();
  typeWriter();


})