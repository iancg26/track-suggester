$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var name = $("#name").val();
    var system = $("select#system").val();
    var app = $("select#app").val();
    var role = $("select#role").val();
    var details = $("select#details").val();
    var style = $("select#style").val();

      if (system = "windows" ) {
        $("#course").empty().append("C#");
      } else if (system === "macos") {
        $("#course").empty().append("CSS");
      } else if (system === "linux") {
        $("#course").empty().append("PHP");
      } else {
        $("#course").empty().append("Java");
      }
      if (app === "tinder") {
          $("#course").empty().append("CSS");
      } else if (app === "facebook") {
        $("#course").empty().append("C#");
      } else if (app === "snapchat") {
        $("#course").empty().append("PHP");
      } else {
        $("#course").empty().append("Java");
      }
      if (role === "wallflower") {
        $("#course").empty().append("PHP");
      } else if (role === "leader") {
        $("#course").empty().append("C#");
      } else if (role === "follower") {
        $("#course").empty().append("CSS");
      } else {
        $("#course").empty().append("Java");
      }
      if (details === "very") {
        $("#course").empty().append("CSS");
      } else if (details === "important") {
        $("#course").empty().append("C#");
      } else if (details === "some") {
        $("#course").empty().append("PHP");
      } else {
        $("#course").empty().append("Java");
      }
      if (style === "need") {
        $("#course").empty().append("CSS");
      } else if (style === "ok") {
        $("#course").empty().append("PHP");
      } else if (style === "umm") {
        $("#course").empty().append("Java");
      } else {
        $("#course").empty().append("C#");
      }
    $("name").show();
    $("#statement").show();
    event.preventDefault();
  });
});
