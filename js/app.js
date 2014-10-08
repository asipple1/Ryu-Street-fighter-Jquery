$(document).ready(function(){

$('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
})
      .mouseleave(function() {
       $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
    .mousedown(function(){
    playHadouken();
        //play hadouken sound
        // show hadouken and animate it to the right of the screen
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
     $('.hadouken').finish().show()
    .animate(
      {'left': '600px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
    .mouseup(function(){
        
        //ryu goes back to his ready position
        $('.ryu-throwing').hide();
    $('.ryu-ready').show();
})
    $(document).keydown(function(event){
    //ryu is cool position
    if(event.keyCode == 88){
        $('.ryu-cool').show();
    $('.ryu-ready').hide();
        $('.ryu-still').hide();
    
    }
    })
.keyup(function (event) {
		if (event.keyCode == 88) { 
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
});
    });
$(document).ready(function(){
$('.one').click(function(){
      $('.one').hide();
    $('.two').show();
  })
$('.two').click(function(){
    $(this).hide();
$('.three').show();
})
$('.three').click(function(){
    $('.two').hide();
    $(this).hide();
$('.four').show();
})
$('.four').click(function(){
    $(this).hide();
$('.one').show();
});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}