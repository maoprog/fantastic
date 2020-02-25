$(document).ready(function() {
    $("#img").click(function() {
        $("#design").fadeToggle(1000);
    });
    $("#img2").click(function() {
        $("#development").slideToggle(1000);
    });
    $("#img3").click(function() {
        $("#Products").toggle(1000);
    });
    $('#button').submit(function(){
      var name = $('#name').val();
       alert("Your message "+name+ " has been sent");
    });
  });