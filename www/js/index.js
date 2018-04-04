var remoteSite = "https://klubaners.web.id/sibulan/resi/drivers.php";
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
        app.loginCheck();
        app.setupPush();
    },

    loginCheck: function(){
      var nmTelp = localStorage.getItem("nmTelp");
      if(nmTelp == "" || nmTelp == null ){
        window.location="login.html";
      }else{
        document.getElementById('nmTelp').innerHTML = nmTelp;
        app.driverData(nmTelp);
      }
    },

    driverData: function(nmTelp){
      $.getJSON(
        remoteSite+"?tes=info&nmTelp="+nmTelp,
        function(driver){
          var data = JSON.parse(driver);
          $("#namaSopir").html(data.nama);
          $("#alamatSopir").html(data.alamat);
          $("#mobil").html(data.mobil);
          $("#nopol").html(data.nopol);
        }
      );
    },
    // Update DOM on a Received Event
    /*
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    */

    // New application Push setup function
    setupPush: function() {

    //Initialise Push Notifications
    var push = PushNotification.init({
      "android": {},
      "ios": {
      "sound": true,
      "alert": true,
      "badge": true
      },
      "windows": {}
    });

  //Function that executes once registered with Firebase
    push.on('registration', function(data) {
    //  console.log("registration event: " + data.registrationId);
    //  console.log("device type: " + device.platform);
    //  var info = data.registrationId+", "+device.platform;
    //  document.getElementById('regId').value = data.registrationId;
      var nmTelp = localStorage.getItem('nmTelp');
      localStorage.setItem('regId',data.registrationId);
      $.post(
        remoteSite+'?tes=token',{
          nmTelp: nmTelp, regid: data.registrationId
        },function(response){
          $("#app-status").html('Registered');
          // $("#app-pesan").html(response);
        }
      );
      // document.getElementById('platform').innerHTML = device.platform;
      // document.write('<div>' + data.registrationId + '</div>');
  });

  //Error handler
  push.on('error', function(e) {
  //  console.log("push error: " + e.message);
    document.getElementById('status').innerHTML = "error: "+e.message;
  });

  //Function that executes when a notification is received
  push.on('notification', function(data) {
    // console.log('notification event received');
    var pesan = data.message +'<br/>'+data.title;
    document.getElementById('app-status').innerHTML = 'Order masuk';
    document.getElementById('app-pesan').innerHTML = pesan;
    /*
    navigator.notification.alert(
    data.message, // message
    null, // callback
    data.title, // title
    'Ok' // buttonName
    );
    */
  });

  //Push finish setup function
  push.finish(function() {
    // console.log('Push Setup Success');
    document.getElementById('status').innerHTML = "Push Success";
    }, function() {
    // console.log('Push Setup Error');
    document.getElementById('status').innerHTML = "Push Failed";
  });

  }
};
