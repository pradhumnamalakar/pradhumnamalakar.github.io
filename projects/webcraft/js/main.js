$(document).ready(function(){
   $('body').prepend('<div class="loader"><div class="loading"></div></div>');
        $('.loader').delay(1000).slideUp(3000,function(){
            $(this).remove();
        });
        $('.loading').fadeOut(3000,function(){
            //$(this).remove();
        });

            $(' <div class="par"> </div>').insertAfter('.about');
            $(' <div class="par2"> </div>').insertAfter('.rules');
            $(' <div class="par3"> </div>').insertAfter('.prizes');            

//    $('#2').on('click',function(e){
//        e.preventDefault();
//        $.scrollTo($('.about'),3000);
//    });
//    $(window).scroll(function(){                          
//            if ($(this).scrollTop() >100) {
//                $('.navigationDiv').addClass("show_nav");
//            } else {
//                $('.navigationDiv').removeClass("show_nav");
//            }
//        });
    
   
    $(function() {
	$('ul li a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500);
		
		event.preventDefault();
	});
});

    
//$(window).on('resize', function(event) {
    var width = $(window).width();
    if(width < 480) {
        $('.close-btn').click(function(){
        $(".navigationDiv").toggleClass('slide');
    }); 
        $('ul li a').click(function(){
            $(".navigationDiv").removeClass('slide');
            $(".close-btn").removeClass('change');
        });
    } 
//});
    /*$(window).load(function() {
        var width = $(window).width();
    if(width < 480) {
        $('.close-btn').click(function(){
        $(".navigationDiv").toggleClass('slide');
    }); 
        $('ul li a').click(function(){
            $(".navigationDiv").removeClass('slide');
            $(".close-btn").removeClass('change');
        });
    }
     });*/

});