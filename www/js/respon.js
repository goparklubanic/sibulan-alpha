$(document).ready( function(){
  var pemohon     = localStorage.getItem('jobPemohon');
  var jemput      = localStorage.getItem('jobAlamat');
  var tujuan      = localStorage.getItem('jobTujuan');
  var geoloc      = localStorage.getItem('jemput');
  var jmpLink     = "<a href=# onClick=openMap('"+geoloc+"')>"+jemput+"</a>";
  $("#ticketId").html(localStorage.getItem('ticketId'));
  $("#pemohon").html(pemohon);
  $("#jemput").html(jmpLink);
  $("#tujuan").html(tujuan);
  if(pemohon == ''){$('#jobDone').hide();}


});

function openMap(geocoords){
  var label = encodeURI('Titik Jemput'); // encode the label!
  window.open('geo:0,0?q=' + geocoords + '(' + label + ')', '_system');
}
