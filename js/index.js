// Function to animate the banner rotation
function animateSlider() {
  // Interval to handle the banner change delay
  interval = setInterval(function() {
      bannerSlider.animate({'left': '-=100%'}, 1000, function() { // Animate over 1 second
        currentSlide++;
          if (currentSlide === bannerSlides.length) {
              currentSlide = 1;
              bannerSlider.css('left', "0%");
          }
      });
  }, 4000); // Change Image every 4 seconds.
}

// Function to animate to the next page
function nextPageAnimate() {
  if (pagePosition != maxPage) {
    appContainer.animate({left:'-=100%'}, 1000, 'swing'); // Animate over 1 second
    pagePosition++;
    nextPage.removeClass("next_page--disabled");
  }
}

// Function to animate to the previous page
function prevPageAnimate() {
  if (pagePosition != minPage) {
    appContainer.animate({left:'+=100%'}, 1000, 'swing'); // Animate over 1 second
    pagePosition--;
    prevPage.removeClass("prev_page--disabled");
  }
}

$(document).ready(function() {
  prevPage = $(".prev_page");
  nextPage = $(".next_page");

  appContainer = $(".app_container");

  bannerSlider = $(".banner_slider");
  bannerSlides = $(".slide");

  currentSlide = 1;
  minPage = 1;
  maxPage = 3;
  pagePosition = 1;

  animateSlider(); // Begin banner animation

  prevPage.click(function() {
    prevPageAnimate();

    if (pagePosition == minPage) {
      prevPage.addClass("prev_page--disabled");
    }

    if (pagePosition != maxPage) {
      nextPage.removeClass("next_page--disabled");
    }
  });

  nextPage.click(function() {
    nextPageAnimate();

    if (pagePosition == maxPage) {
      nextPage.addClass("next_page--disabled");
    }

    if (pagePosition != minPage) {
      prevPage.removeClass("prev_page--disabled");
    }
  });
});
