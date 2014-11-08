$(document).ready(function() {
  $('.current').css('margin-top', $('.navbar').first().height() - 100 - $('.current').height());
  $('.submenu-navbar').css('height', $('.navbar').height() + 120);
  $('#show_submenu_1').click(function() {
    $('#submenu_1').animate({
      width: 'toggle'
    }, 350);
    $('.submenu-navbar').each(function() {
      if (this.id != 'submenu_1') {
        if ($(this).css('display') == 'block') {
          $(this).hide();
        }
      }
    });
  });
  $('#submenu_1 span').click(function() {
    $('.submenu-navbar').each(function() {
      if (this.id != 'submenu_1') {
        if ($(this).css('display') == 'block') {
          $(this).hide();
        }
      }
    });
    $('#submenu_' + this.id).animate({
      width: 'toggle'
    }, 350);
  });
  $('.main_header').css('width', $(document).width() - 100);
  $('.content').css('width', $(document).width() - 170);
});
