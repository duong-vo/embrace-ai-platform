// JS for all pages

// DOCUMENT READY
$(document).ready(function() {
  initCopyright();
  hoverEffects();
  hoverShadow();
});

// Functions
function hoverShadow() {
  $('.hoverOn').hover(function() {
    $(this).addClass('shadow-lg');
  }, function() {
    $(this).removeClass('shadow-lg');
  });
}

function hoverEffects() {
  $('.iconHover').hover(function() {
    $(this).addClass('iconOn');
  }, function() {
    $(this).removeClass('iconOn');
  });
  $('.linkHover').hover(function() {
    $(this).addClass('linkOn');
  }, function() {
    $(this).removeClass('linkOn');
  });
}
function initCopyright() {
  const currentYear = new Date().getFullYear();
  $("#copyright").html(`© ${currentYear} Lilly Leadership Institute, All rights reserved.`);
};
