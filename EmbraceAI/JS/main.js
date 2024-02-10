// JS for all pages

// Globals


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

function fetchCSV() {
  $.ajax({
    url: 'https://embraceai.co/assets/resources.drew',
    method: 'GET',
    type: 'text',
  }).then(function (data) {
    laikinParse(data);
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh');
    });
  }).catch(function (data) {
    console.log('failed', data);
  });
}

function renderResources(itemNum, title, source, description, link) {
  if (itemNum === undefined || itemNum === "") return;
  $(".resourcesHere").append(
    `
      <br>
      <div class="card rcard" id="${itemNum}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${source}</h6>
          <p class="card-text">${description}</p>
          <a href="${link}" class="card-link">Go to Resource</a>
        </div>
      </div>
      <br>
    `
  );
}
function laikinParse(str) {
  str = str.split("\n").slice(1);
  str.forEach((element) => {
    renderResources(...element.split("[:)]"));
  });
}
fetchCSV();