/*btn up*/
$(document).ready(function () {

 $('.select-click.name-ac .opener').click(function () {
        $(this).parent().toggleClass('active');
    });

    var top_show = 150; 
    var delay = 1000; 

    $(window).scroll(function () { 
        
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {
        
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
/* end btn up*/

    $('.firstBlock_arrowDown').click(function () {
        var benefitsBlock = $('#benefitsBlock').offset().top;
        $('body, html').animate({
           scrollTop: benefitsBlock-100
        }, delay);
    });


//Функция добавления класса active при прокрутке.
//когда скролл находится напротив элемента добавляется класс active
function addActive(className,temeout){
    if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
        $(className).each(function(index, el) {
        var element_top = $(el).offset().top;
        var element = $(el);
        if ($(window).scrollTop() >= element_top-800){
            setTimeout(function(){
                element.addClass('active');
            },temeout)
        }  
        });
    }
    if (temeout === undefined) {
        temeout = 0;
    }
    $(window).scroll(function () {
        $(className).each(function(index, el) {
        var element_top = $(el).offset().top;
        var element = $(el);
        if ($(window).scrollTop() >= element_top-800){
            setTimeout(function(){
                element.addClass('active');
            },temeout)
        }  
        });
    });
    
};

if ($(window).innerWidth() > 768) {
        var blog_left_menue = false;
    } else {
        var blog_left_menue = true;
        $('.blog_left_menue').removeClass('active');
    }

    $('.blog_left_menue_btn').on('click', function () {
        if (blog_left_menue == true) {
            $('.blog_left_menue').addClass('active');
            blog_left_menue = false;
        } else {
            $('.blog_left_menue').removeClass('active');
            blog_left_menue = true;
        }
    });

addActive('.regulated_risk', 500);
addActive('.regulated_safe');
addActive('.header_lines'); 

    new WOW().init();


addActive('.curva1_active_wrap');

addActive('.grey_circle1');
addActive('.grey_circle2', 500);
addActive('.grey_circle3', 1000);
addActive('.grey_circle4', 1800);

addActive('.hiw_icon1');
addActive('.hiw_icon2', 1000);
addActive('.hiw_icon3', 1500);
addActive('.hiw_icon4', 2300);

    $('.hiw_icon1').on('mouseenter',function(){
        $('.hiw_icon_js').css('display','none');
        $('.for_hiw_icon1').css('display','block');
    }); 
     $('.hiw_icon2').on('mouseenter',function(){
        $('.hiw_icon_js').css('display','none');
        $('.for_hiw_icon2').css('display','block');
    }); 
     $('.hiw_icon3').on('mouseenter',function(){
        $('.hiw_icon_js').css('display','none');
        $('.for_hiw_icon3').css('display','block');
    }); 
     $('.hiw_icon4').on('mouseenter',function(){
        $('.hiw_icon_js').css('display','none');
        $('.for_hiw_icon4').css('display','block');
    });

addActive('.curva2_active_wrap');
addActive('.grey_circle2_1', 0);
addActive('.grey_circle2_2', 500);
addActive('.hiw_icon2_1');
addActive('.hiw_icon2_2', 1000);

$('.hiw_icon2_1').on('mouseenter',function(){
    $('.hiw_icon_js2').css('display','none');
    $('.for_hiw_icon2_1').css('display','block');
}); 
 $('.hiw_icon2_2').on('mouseenter',function(){
    $('.hiw_icon_js2').css('display','none');
    $('.for_hiw_icon2_2').css('display','block');
});        
});
