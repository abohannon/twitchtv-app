var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Starladder5", "habathcx", "RobotCaleb", "noobs2ninjas", "storbeck", "comster404"];

channels.forEach(function(val) {
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + val, function(data) {

    var status;
    if (data.stream !== null) {
      status = "<span class='new badge green' data-badge-caption='Online'></span>";
      statusClass = "online";
    } else {
      status = "<span class='new badge red' data-badge-caption='Offline'></span>";
      statusClass = "offline";
    }


    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + val, function(data) {


      var bio,
        logo;

      if (data.bio === null) {
        bio = "No description exists for this channel";
      } else {
        bio = data.bio;
      }
      if (data.bio === undefined) {
        status = "<span class='new badge grey' data-badge-caption='Closed'></span>";
        bio = "This account has been closed";
        data.display_name = "Poof. Gone.";
      }
      if (data.logo === null) {
        logo = "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg";
      } else {
        logo = data.logo;
      }

      var userURL = "https://www.twitch.tv/" + data.name;

        $("#js-display-results").append(
          "<div id='result' class='card horizontal hoverable'><div class='card-stacked'><div class='card-content'><a class='js-link' href=" + userURL + "><img id='js-image' src=" + logo + "></a><h5 id='js-title'>" + data.display_name + "</h5><p id='js-description'>" + bio + "</p></div><div class='card-action'><a class='js-link' href=" + userURL + ">" + status + "WATCH NOW</a></div></div></div>"
        );
    });
  });

});

$(".js-online").click(function(){
  $(".red, .grey").parent().parent().parent().parent().hide();
  $(".green").parent().parent().parent().parent().show();
});
$(".js-offline").click(function(){
  $(".green, .grey").parent().parent().parent().parent().hide();
  $(".red").parent().parent().parent().parent().show();
});
$(".js-viewall").click(function(){
  $(".green, .grey, .red").parent().parent().parent().parent().show();
});
