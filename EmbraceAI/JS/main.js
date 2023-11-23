

$(document).ready(function() {
    // Add a shadow effect to Bootstrap cards on hover
    $('.hoverOn').hover(function() {
      $(this).addClass('shadow-lg');
    }, function() {
      $(this).removeClass('shadow-lg');
    });
    // Add a shadow effect to Bootstrap cards on hover
    $('.iconHover').hover(function() {
      $(this).addClass('iconOn');
    }, function() {
      $(this).removeClass('iconOn');
    });
  });
