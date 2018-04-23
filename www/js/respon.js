$(document).ready( function(){
  var pemohon     = localStorage.getItem('jobPemohon');
  var jemput      = localStorage.getItem('jobAlamat');
  var tujuan      = localStorage.getItem('jobTujuan');
  var telpon      = localStorage.getItem('jobTelp');
  var koordinat   = localStorage.getItem('jobKoordinat');

  $("#pemohon").html(pemohon);
  $("#jemput").html(jemput+"<br />"+koordinat);
  $("#telepon").html(telpon);
  $("#tujuan").html(tujuan);
});
