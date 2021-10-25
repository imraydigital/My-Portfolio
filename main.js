$(document).ready(() => {

  const fadeAbout = () => {
    $(".about").fadeIn(2000);
  }

  const fadeSkills = () => {
    $(".skills").fadeIn(2000);
    $(".skills").css("display", "flex");
  }

  const fadeProjects = () => {
    $(".projects").fadeIn(2000);
    $(".projects").css("display", "flex");
  }


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


  // Scroll fade About
  $(document).scroll(() => {

    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 64) {
      fadeAbout();
    }
  })

  // Scroll fade Skills
  $(document).scroll(() => {

    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 240) {
      fadeSkills();
    }
  });

  // Scroll fade Projects
  $(document).scroll(() => {

    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 1100) {
      fadeProjects();
    }
  });

  fade();
  typeWriter();


})