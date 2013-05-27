$(document).ready(function() {
  $('form').on("submit",function(e){
    e.preventDefault();
    $.ajax({
      url: '/',
      type: 'post',
      data: $(this).serialize()
    }).done(function(response){
      console.log(response);
      $("#tweetresults").html(response).hide().slideDown();
    });
  });
});
