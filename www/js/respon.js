$(document).ready( function(){
  var pemohon     = localStorage.getItem('jobPemohon');
  var jemput      = localStorage.getItem('jobAlamat');
  var tujuan      = localStorage.getItem('jobTujuan');
  var geoloc      = localStorage.getItem('jemput');
  var jmpLink     = "<a href=# onClick=openMap('"+geoloc+"')>"+jemput+"</a>";
  $("#pemohon").html(pemohon);
  $("#jemput").html(jmpLink);
  $("#tujuan").html(tujuan);


});

function openMap(geocoords){
  var label = encodeURI('Titik Jemput'); // encode the label!
  window.open('geo:0,0?q=' + geocoords + '(' + label + ')', '_system');
}
