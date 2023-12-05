
$(document).ready(function() {
  // Requiring fs module in which 
  // readFile function is defined.
  fs.readFile('textTest.txt', (err, data) => {
    if (err) throw err;
    console.log('beans', data.toString());
  })

  // Add a shadow effect to Bootstrap cards on hover
  $('.hoverOn').hover(function() {
    $(this).addClass('shadow-lg');
  }, function() {
    $(this).removeClass('shadow-lg');
  });

  // Add a shadow effect to icons on hover
  $('.iconHover').hover(function() {
    $(this).addClass('iconOn');
  }, function() {
    $(this).removeClass('iconOn');
  });

  // Add a color change to links on hover
  $('.linkHover').hover(function() {
    $(this).addClass('linkOn');
  }, function() {
    $(this).removeClass('linkOn');
  });
});
