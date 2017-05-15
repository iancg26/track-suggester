// UI logic
$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var name = $("#name").val();
    var system = parseInt($("select#system").val());
    var app = parseInt($("select#app").val());
    var role = parseInt($("select#role").val());
    var details = parseInt($("select#details").val());
    var style = parseInt($("select#style").val());
    $("#statement").show();
    event.preventDefault();

    var total = (system + app + role + details + style);
    
    if (total <= 5) {
      $("#cSharp").show();
      $("#java").hide();
      $("#ruby").hide();
      $("#css").hide();
    } else if (total >= 6 && total <= 12) {
      $("#java").show();
      $("#cSharp").hide();
      $("#css").hide();
      $("#ruby").hide();
    } else if (total >= 13 && total <= 18) {
      $("#ruby").show();
      $("#cSharp").hide();
      $("#css").hide();
      $("#java").hide();
    } else if (total >= 19) {
      $("#css").show();
      $("#java").hide();
      $("cSharp").hide();
      $("#ruby").hide();
    }
  });
    });
