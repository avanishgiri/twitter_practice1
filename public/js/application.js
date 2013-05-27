$(document).ready(function() {
  $('form').on("submit",function(e){
    $("#time").hide();
    t = Date.now()
    e.preventDefault();
    $.ajax({
      url: '/',
      type: 'post',
      data: $(this).serialize()
    }).done(function(response){
      console.log(response);
      $("#tweetresults").html(response).hide().slideDown();
      $("#pacman").hide();
      time = (Date.now() - t) / 1000;
      $("#time").html("<span>Your search took " + time + " seconds</span>").show();
    });
    $("#pacman").show();
  });
});
