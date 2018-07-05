var remoteSite = "https://sibulan.id/resi/drivers.php";
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    //    app.receivedEvent('deviceready');
      alert('deviceready');
        app.driverData();
    },

    driverData: function(){
      alert('0881');
      $.getJSON(
        remoteSite+"?tes=info&nmTelp=08817676066",
        function(driver){
          var data = JSON.parse(driver);
          $("#namaSopir").html(data.nama);
          $("#alamatSopir").html(data.alamat);
          $("#mobil").html(data.mobil);
          $("#nopol").html(data.nopol);
        }
      );
    }
};
