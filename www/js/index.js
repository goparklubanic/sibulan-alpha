var remoteSite="https://klubaners.web.id/sibulan/resi/drivers.php";
//var nmTelp = localStorage.getItem('nmTelp');
var driver = {
  isLogin: function(){
    var nmTelp = localStorage.getItem('nmTelp');
    if( nmTelp == null ){
      window.location = 'login.html';
    }else{
      driver.info();
    }
  },

  info: function(){
    var nmTelp = localStorage.getItem('nmTelp');
    $.ajax({
      url: remoteSite+"?tes=info&nmTelp="+nmTelp,
      success: function(driver){
        document.getElementById("driverInfo").innerHTML=driver;
      }
    });
  },

  setToken: function(){
    console.log('token not set yet');
  }
}
