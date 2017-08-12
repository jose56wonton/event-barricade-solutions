function slider() {
    
    if (document.body.scrollTop > $("div.cover-1").height()) {    
        $('.nav').stop().animate({"margin-top": '0'});
    }
    else
        $('.nav').stop().animate({"margin-top": '-60px'}); 
}
$(window).scroll(function () {
    slider();
});

$(document).ready(function () {
    //slider();
});