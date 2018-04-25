var wh = window.innerHeight;
var appMainHeight = parseInt(wh) - 140;
$(window).resize( function(){
  $(".app-mainbox").css('min-height',appMainHeight);
});

$(window).ready( function(){
  $(".app-mainbox").css('min-height',appMainHeight);
});
