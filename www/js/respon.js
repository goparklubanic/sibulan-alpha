$(document).ready( function(){
  var pemohon     = localStorage.getItem('jobPemohon');
  var jemput      = localStorage.getItem('jobAlamat');
  var tujuan      = localStorage.getItem('jobTujuan');

  $("#pemohon").html(pemohon);
  $("#jemput").html(jemput);
  $("#tujuan").html(tujuan);

});
