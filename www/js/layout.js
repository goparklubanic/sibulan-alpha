var wh = window.innerHeight;
var appMainHeight = parseInt(wh) - 120;
$(window).resize( function(){
  $(".app-main").css('min-height',appMainHeight);
});

$(window).ready( function(){
  $(".app-main").css('min-height',appMainHeight);
});
