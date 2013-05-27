$(document).ready(function() {
  $('form').on("submit",function(e){
    e.preventDefault();
console.log($(this).serialize())
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
