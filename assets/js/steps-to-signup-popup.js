$(document).ready(function () {
  $('#signup-steps').on('click', function () {
    $('.video-popup').fadeIn('slow');
    return false;
  });

  $('.popup-bg').on('click', function () {
    $('.video-popup').slideUp('slow');
    return false;
  });

  $('.close-btn').on('click', function () {
    $('.video-popup').fadeOut('slow');
    return false;
  });
});
