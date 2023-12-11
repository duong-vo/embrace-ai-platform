const HaddadBio = "Charlie leads the Enterprise Business Architecture for Lilly global Tech team. His role is to help our Tech organization deliver digital solutions faster and with higher value that drive Lilly's company growth and success. He leads a talented team of innovators and architects who create and shape solutions for our strategic business priorities, such as improving customer experience, accelerating research and development, enhancing data analytics, and increasing operational efficiency. He also partners closely with our Digital Core teams to ensure that our enterprise foundation tech stack is modern, effective, and scalable. During his more than 30 years at Lilly, Charlie has been a software leader focused on delivering digital innovations in pharmaceutical drug development across many therapeutic areas. Most recently, he was responsible for enabling excellent patient experiences through clinically relevant, digital health software and devices. Prior to that, the majority of roles were in Medicines Development IT where he led the harmonization, integration and automation of clinical information management and data flow. He also had senior leadership roles in our global infrastructure organization enabling digital platform solutions and employee enablement across our enterprise. Charlie earned his bachelor's degree in Computer Systems Analysis from Miami University. He lives in Indianapolis with his wife and they have three grown children spread across the country.";

$(document).ready(function() {
  // Requiring fs module in which 
  // readFile function is defined.

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
