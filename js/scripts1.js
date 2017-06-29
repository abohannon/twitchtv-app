var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Starladder5", "habathcx", "RobotCaleb", "noobs2ninjas", "storbeck"];

$.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+channels[3], function(data1){
  console.log(data1);
});

channels.forEach(function(getData){
  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+ channels +"?callback=?", function(strData){

    var status;

    if (strData.stream === null){
      status = "<span class='new badge red' data-badge-caption='Offline'></span>";
    }
    else {
      status = "<span class='new badge' data-badge-caption='Online'></span>";
    }
    console.log(status);

    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+ channels +"?callback=?", function(data){
      // console.log(data);
      var bio,
          logo;

      if (data.bio === null){
        bio = "No description exists for this channel";
      } else {
        bio = data.bio;
      }
      if (data.logo === null){
        logo = "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg";
      } else {
        logo = data.logo;
      }


      var userURL = "https://www.twitch.tv/" + data.name;
      // console.log(userURL);


        $("#js-display-results").append(
          "<div class='card horizontal hoverable'><div class='card-stacked'><div class='card-content'><a class='js-link' href="+ userURL +"><img id='js-image' src="+ logo +"></a><h5 id='js-title'>"+ data.display_name +"</h5><p id='js-description'>"+ bio +"</p></div><div class='card-action'><a class='js-link' href="+ userURL +">"+ status +"WATCH NOW</a></div></div></div>"
        );

});


});
});

// for (var i = 0; i < channels.length; i++){
//   var streamURL = "https://wind-bow.gomix.me/twitch-api/streams/"+ channels[i] +"?callback=?";
//   // console.log(streamURL);
//   var apiURL = "https://wind-bow.gomix.me/twitch-api/users/"+ channels[i] +"?callback=?";
//   // console.log(apiURL);


// var apiURL = "https://wind-bow.gomix.me/twitch-api/users/Starladder5?callback=?";

// function getChannelInfo(){
//   channels = forEach(function(channel){
//     function makeURL(type, name){
//       return "https://wind-bow.gomix.me/twitch-api/" + type + "/" + name + "?callback=?";
//     }
//   });
// }




  //   $("#js-title").html(data.display_name);
  //   if (data.bio === null){
  //     $("#js-description").html("No channel description exists for this user. Oops.");
  //   } else {
  //   $("#js-description").html(data.bio);
  // }
  //   $(".js-link").attr("href", userURL);
  //   if (data.logo === null){
  //     $("#js-image").attr("src", "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg");
  //   } else {
  //   $("#js-image").attr("src", data.logo);
  // }
