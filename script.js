console.log('hello world');
// wait for document to load
$(document).ready(function() {

  $('body').css('display', 'none');
  $('body').fadeIn(20);
  $('.invert, a').click(
    function() {
      event.preventDefault();
      newLocation = this.href;
      $('body').fadeOut(200, newpage);
    });

  function newpage() {
    window.location = newLocation;
  }

});
