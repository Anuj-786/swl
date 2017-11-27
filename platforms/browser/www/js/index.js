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
 var firstImgSrc;
  imageurl=[] 
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
        app.receivedEvent('deviceready');


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    },
    send: function( ) {
        var image1 = document.createElement('IMG')
        image1.src='../img/screen.png'

        document.getElementById('test').appendChild(image1)
        
    },
    swlCamera: function() {
       
        var option = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
        }
        
        navigator.camera.getPicture(onSuccess, onFail, option);
        
        function onSuccess(imageData) {
            imageurl.push(imageData)
            // // alert(imageurl)
            for(var i = 0; i<imageurl.length; i++) {

                // alert(imageurl[0])

                /*var image1 = document.getElementById('img-1').src=imageurl[0];*/
                var imageone = document.getElementById('img-1').src = imageurl[0];
                
                document.getElementById('banner-img').style.background = "none";


                var imagetwo = document.getElementById('img-2').src = imageurl[1];
                
               
                var imagethree = document.getElementById('img-3').src  = imageurl[2];
                
                var imagefour = document.getElementById('img-4').src = imageurl[3];
                
            }
        }
        
        function onFail(error) {
            console.log(error)
        }
    },

    init: function () {
        var firstImageS = document.getElementById("firstimage");
        var test = document.getElementById('default-img')
        console.log(":test"+test)
        firstImageS.src=localStorage.getItem('firstimage')
        console.log(firstImageS)
    },

    geolocation: function () {
        navigator.geolocation.getCurrentPosition(app.onWeatherSuccess, app.onWeatherError, { enableHighAccuracy: true });
         // Success callback for get geo coordinates
     },
     onWeatherSuccess: function (position) {

            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;

            getWeather(Latitude, Longitude);
    

        // Get weather by using coordinates

        function getWeather(latitude, longitude) {

            // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
            var OpenWeatherAppKey = "dd5262af1afc2fe8ddfa572282ed0691";

            var queryString =
              'http://api.openweathermap.org/data/2.5/weather?lat='
              + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';

           

              

                    $.getJSON(queryString, function (results) {
                        
                        if (results.weather.length) {
                            alert("City:" +results.name +" "+ 'longitude:' +results.coord.lon +" "+ 'latitude:'+results.coord.lat)
                            

                        }

                    })
                
           .fail(function () {
                console.log("error getting location");
            });
        }
    },

        // Error callback

        onWeatherError: function(error) {
            console.log('code: ' + error.code + '\n' + 'me')  
        }
    




};
app.initialize();




/* -- nk Camera stuff.
 */

// var swlGeoBlock = document.getElementById("geolocationBlock")
// var swlCameraBlock = document.getElementById("cameraBlock")

// function SwlHideBlock(block)  {
//     block.style.display = 'none'
// }


// function SwlShowBlock(block)  {
//     block.style.display = 'inline'
// }



// var swlCameraBtn = document.querySelector('Button');
// swlCameraBtn.addEventListener('click', SwlStartCamera);

// function SwlPicSuccess(picData)  {
//     alert("Thank You! You details will be sent to IPH")

//     var image = document.getElementById('swlImage');
//     image.src = "data:image/jpeg;base64," + picData

//     SwlHideBlock(swlCameraBlock)
//     SwlShowBlock(swlGeoBlock)
// }


// function SwlPicFail(message)  {
//     alert('Camera Failure, msg: ' + message)

//     SwlHideBlock(swlCameraBlock)
//     SwlShowBlock(swlGeoBlock)
// }



// function SwlStartCamera()  {
//     alert ("Starting Camera")
//     if (swlCameraBtn.value === 'cameraOnButton')
//         navigator.camera.getPicture(SwlPicSuccess, SwlPicFail,
//             {
//                 destinationType: Camera.DestinationType.FILE_URI,
//                 sourceType: Camera.PictureSourceType.CAMERA,
//                 popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
//             });

//     if (swlCameraBtn.value === 'geolocationButton')  {
//         SwlHideBlock(swlGeoBlock)
//         alert ("Thank you! Someone will fix the problem soonly!")
//     }
// }



// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//     console.info ("SWL Camera Ready");
//     console.info(navigator.camera);

//     SwlHideBlock (swlGeoBlock)
//     SwlShowBlock (swlCameraBlock)
// }

