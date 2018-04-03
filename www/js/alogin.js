var remoteSite = 'https://klubaners.web.id/sibulan/resi/drivers.php';
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
        app.setupPush();
    },

/*
    // Update DOM on a Received Event
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
      var nmTelp = localStorage.getItem('nmTelp');
      $.post(
        remoteSite+"?tes=token",
        { regid: data.registrationId, nmTelp: nmTelp },
        function(response){
          // $("#pesan").html(response);
            document.getElementById('status').innerHTML = "Tunggu Sejenak";
        }
      );
      localStorage.setItem('regId',data.registrationId);
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
    document.getElementById('status').innerHTML = 'notification event received';
    document.getElementById('pesan').innerHTML = pesan;
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
    document.getElementById('status').innerHTML = "Verifikasi Selesai";
    window.location='index.html';
    }, function() {
    // console.log('Push Setup Error');
    document.getElementById('status').innerHTML = "Verifikasi Gagal";
  });

  }
};
