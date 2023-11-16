

$(document).ready(function() {
    // Add a shadow effect to Bootstrap cards on hover
    $('.hoverOn').hover(function() {
      $(this).addClass('shadow-lg');
    }, function() {
      $(this).removeClass('shadow-lg');
    });
  });
