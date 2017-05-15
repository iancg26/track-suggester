// UI logic
$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var name = $("#name").val();
    var system = parseInt($("select#system").val());
    var app = parseInt($("select#app").val());
    var role = parseInt($("select#role").val());
    var details = parseInt($("select#details").val());
    var style = parseInt($("select#style").val());
    var cSharp = 0;
    var cssTally = 0;
    var phpTally = 0;
    var javaTally = 0;
    $("#statement").show();
    event.preventDefault();
    var total = (system + app + role + details + style);
    console.log(total);
// Business logic
    function tallyScores(userSystem, userApp, userRole, userDetails, userStyle) {

     if (userSystem === "windows" ) { cSharp++; } else if (userSystem === "macos") { cssTally++; } else if (userSystem === "linux") { phpTally++; } else { javaTally++; }

     if (userApp === "tinder" ) { cSharp++; } else if (userApp === "facebook") { cssTally++; } else if (userApp === "snapchat") { phpTally++; } else { javaTally++; }

     if (userRole === "leader" ) { cSharp++; } else if (userRole === "follower") { cssTally++; } else if (userRole === "wallflower") { phpTally++; } else { javaTally++; }

     if (userDetails === "very" ) {
       cSharp++;
     } else if (userDetails === "important") {
       cssTally++;
     } else if (userDetails === "some") {
       phpTally++;
     } else {
       javaTally++;
     }

     if (userStyle === "need" ) { cSharp++; } else if (userStyle === "ok") { cssTally++; } else if (userStyle === "umm") { phpTally++; } else { javaTally++; }
    }
    function getMaxOfTalleyScores(cSharp, cssTally, phpTally, javaTally) {
      return Math.max.apply(cSharp, cssTally, phpTally, javaTally);

    }
    var resultMax = getMaxOfTalleyScores();




    })
    });
