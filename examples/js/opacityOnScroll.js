function scroll(select) {
$(window).on('scroll', function () {
    var intro = $(select);
    var scrollTop = $(this).scrollTop();
    var height = intro.outerHeight();
    var heightFromTop = $(select).offset().top;
    var x = height+heightFromTop - scrollTop; 
    var y = height /100; //piexels per 1%
  //  intro.css({'background': "#eb01a5"});
    //intro.addClass
    var procent = (x/y)*0.01;
   console.log(procent);
      intro.css({ 'opacity': procent});
    if ( procent > '1' ) {
      intro.css({ 'opacity': 1 });
    } else if ( procent < '0' ) {
      intro.css({ 'opacity': 0});
    }
  
});
}
