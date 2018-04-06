/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        app.setupPush();
    },

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
    var fcmToken = data.registrationId;
      window.localStorage.setItem('fcmToken', fcmToken);
      document.getElementById('fcmToken').innerHTML = fcmToken;
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
    document.getElementById('fcmStatus').innerHTML = "Push Success";
    }, function() {
    // console.log('Push Setup Error');
    document.getElementById('fcmStatus').innerHTML = "Push Failed";
  });

  }
};
