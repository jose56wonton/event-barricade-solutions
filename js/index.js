// This is the functionally that I use to get the fixed header to come 
// after the first cover photo.
function slider() {
    
    if (document.body.scrollTop > $("div.cover-1").height()) {    
        $('.nav').stop().animate({"margin-top": '0'});
    }
    else
        $('.nav').stop().animate({"margin-top": '-60px'}); 
}
$(window).scroll(function () {
    slider();
});

$(document).ready(function () {
    //slider();
});
// This is the code I used for the slide in functionality on a lot of the text.
// As you can see it is not of my creation; however, it is not a copy and paste
// I did edit about 50% of the code.
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods1 = $(".row");
var allMods2 = $(".parallax-window");
var allMods3 = $(".parallax-window .text-wrapper h1");

allMods1.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
allMods2.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods1.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("come-in"); 
    }
  });

  allMods2.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("come-in"); 
    }
  });
  
});