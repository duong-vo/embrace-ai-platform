// JS for all pages

// DOCUMENT READY
$(document).ready(function() {
  hoverEffects();
  hoverShadow();
  initCountdown();
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
function initCountdown() {
  const targetDate = new Date("2024-04-12");
  const currentDate = new Date();
  var timeDifference = targetDate.getTime() - currentDate.getTime();
  // Update the countdown every second
  setInterval(() => {
    // Recalculate the time difference
    timeDifference = targetDate.getTime() - new Date().getTime();

    // Update the days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 2;
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown display
    var pill = `<span class="badge text-bg-secondary"><h3>${days} Days Until Embrace AI Conference<h3></span>`;
    $("#timer").empty();
    $("#timer").append(pill);
  }, 1000);
}
