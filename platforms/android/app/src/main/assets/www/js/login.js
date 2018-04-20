var remoteSite = 'https://klubaners.web.id/sibulan/resi/drivers.php';
$(document).ready(function(){

  $("#submit").click( function(){

    var nmTelp = $("#nmTelp").val();
    var password = $("#password").val();

    $.post(remoteSite+'?tes=login',
      { nmTelp: nmTelp, password: password },
      function(response){
        var driver = JSON.parse(response);
        console.log(driver);
        //$("#noTelp").html(driver.nmTelp);
        localStorage.setItem('nmTelp',driver.nmTelp);
        console.log('nomor telp:',driver.nmTelp);
        driverInfo(driver.nmTelp);
        // window.location='index.html';
      }
    );

  });

});



function driverInfo(telp){
  $.getJSON(remoteSite+"?tes=info&nmTelp="+telp, function(driver){
      var nama = driver.nama;
      localStorage.setItem('namaDriver',nama);
      var alamat = driver.alamat;
      localStorage.setItem('alamatDriver',alamat);
      var mobil = driver.mobil;
      localStorage.setItem('jenisMobil',mobil);
      var nopol = driver.nopol;
      localStorage.setItem('nopolMobil',nopol);
  });

    window.location='index.html';
}
