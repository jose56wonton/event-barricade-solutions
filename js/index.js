function slider() {
    
    if (document.body.scrollTop > $("div.nav-1").height()) {    
        $('.nav-2').stop().animate({"margin-top": '0'});
    }
    else
        $('.nav-2').stop().animate({"margin-top": '-60px'}); 
}
$(window).scroll(function () {
    slider();
});

$(document).ready(function () {
    //slider();
});