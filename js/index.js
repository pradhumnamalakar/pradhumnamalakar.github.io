//$(document).ready(function(){  
//(function($) {          
//    $(document).ready(function(){                    
//        $(window).scroll(function(){                          
//            if ($(this).scrollTop() > 200) {
//                $('.navbar').fadeIn(500);
//            } else {
//                $('.navbar').fadeOut(500);
//            }
//        });
//    });
//})(jQuery);
//
//$(window).scroll(
//    {
//        previousTop: 0
//    }, 
//    function () {
//    var currentTop = $(window).scrollTop();
//    if (currentTop < this.previousTop) {
////        $(".sidebar em").text("Up");
//        $(".navbar").fadeIn(1000).show();
//    } else {
////        $(".sidebar em").text("Down");
//        $(".navbar").hide();
//    } 
//    this.previousTop = currentTop;
//});

if ( $(window).width() > 769 ) {   
var mywindow = $(window);
//    console.log(mywindow);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.navbar').fadeOut(800);
//        $('.bottom-navbar').fadeOut(800);
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.navbar').stop().fadeIn(400);
//        $('.bottom-navbar').stop().fadeIn(400);
        up = !up;
    }
    mypos = newscroll;
});
}
if ( $(window).width() <= 576) {   
var mywindow = $(window);
//    console.log(mywindow);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
//        $('.navbar').fadeOut(800);
        $('.bottom-navbar').fadeOut(800);
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
//        $('.navbar').stop().fadeIn(400);
        $('.bottom-navbar').stop().fadeIn(400);
        up = !up;
    }
    mypos = newscroll;
});
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
//});
