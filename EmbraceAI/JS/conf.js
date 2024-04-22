
// DOCUMENT READY
$(document).ready(function() {
    initCountdown();
    addImages();
});


// Countdown Timer
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
      if (days < 0) {
      // Update the countdown display
        var pill = `<span class="badge text-bg-secondary"><h3>The conference has ended!<h3></span>`;
      }
      $("#timer").empty();
      $("#timer").append(pill);
    }, 1000);
}

function addImages() {
  for (let i = 1; i <= 18; i++) {
    $("#gallery").append(`
      <div class="col-lg-4 align-items-center" style="margin-bottom: 10px">
        <img src="imgs/conf/${i}.jpeg" class="img-fluid" style="max-height: 100%; max-width: 100%; object-fit: cover;">
      </div>
    `)
  }
}

// function hmagesList() {
//   const path = '
//   return ['','']
// }
