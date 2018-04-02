$(document).ready(function(){

  var remoteSite = 'https://klubaners.web.id/sibulan/resi/drivers.php';
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
        window.location='alogin.html';
      }
    );

  });

});
