// UI logic
$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var name = $("#name").val();
    var system = $("select#system").val();
    var app = $("select#app").val();
    var role = $("select#role").val();
    var details = $("select#details").val();
    var style = $("select#style").val();
    var cSharp = 0;
    var cssTally = 0;
    var phpTally = 0;
    var javaTally = 0;

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
      function getMaxOftalleyScores(cSharp, cssTally, phpTally, javaTally) {
        return Math.max.apply(null, cSharp, cssTally, phpTally, javaTally);
        console.log(cSharp);
      }
      var resultMax = getMaxOftalleyScores();
      console.log(resultMax);
    $("#statement").show();
    event.preventDefault();
      // };
      // };
      // };
      // };
      // };

  })
  });
