$(document).ready(function() {

  //   var $window = $(window);
  //   var isFixed = false;
  //   var init = $window.offset().Top();

  // $window.scroll(function() {
  //   var currentScrollTop = $window.scrollTop();
  //   if (currentScrollTop > init && isFixed === false) {
  //     isFixed = true;
  //    $('header').addClass('header_offset');
  //    $('.filter').addClass('filter_offset');
  //    $('.filter_option').addClass('filter_option_offset');
  //     console.log("fixed");
  //   } else if (currentScrollTop <= init && isFixed === true) {
  //     isFixed = false;
  //     $('header').removeClass('header_offset');
  //     $('.filter').removeClass('filter_offset');
  //     $('.filter_option').removeClass('filter_option_offset');
  //     console.log("unfixed");
  //   }
  // });
$(window).resize(function () {
        console.log($(window).width())
    
        if ($(window).width() > 880){
            $('.small_nav').hide();
        }

    })

    $('.burger').click(function(){
        $('.small_nav').slideToggle();
    })

    //timer for scroll function. purpose to reduce lag of scroll function
var scrollTimer = null;
$(window).scroll(function () {
        if (scrollTimer) {
            clearTimeout(scrollTimer);   // clear any previous pending timer
        }
        scrollTimer = setTimeout(handleScroll, 100);   // set new timer
    });

//function that shortens height of header/filter when scrolling down
//jQuery collections are cached with boolean statements
function handleScroll(){
    var shrink = false;
    var init = $('.subheader').offset().top;

    $(window).scroll(function(){
    
        var offset = $(window).scrollTop();

        if (offset > init && shrink === false){
            shrink = true;
            $('header').addClass('header_offset');
            $('.filter').addClass('filter_offset');
            $('.filter_option').addClass('filter_option_offset');
            console.log('shrunk!');
        }
        else if (offset <= init && shrink === true){
            shrink = false;
            $('header').removeClass('header_offset');
            $('.filter').removeClass('filter_offset');
            $('.filter_option').removeClass('filter_option_offset');
            console.log('expanded!');
        }
        console.log('scrolling');

    })
}

//clicked image is enlarged and center in the page. background is dimmed. position of enlarged image and background is fixed and takes up entire screen
    $('.preview_img').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('clicked!')

        $('.bigimage_wrapper').removeClass('bigimage_wrapper_hidden');

        var image = $(this).attr('src');

        var prevSrc = $(this).parents('.photoGrid').prev().find('.preview_img').attr('src');

        // .prev().find('.preview_img').attr();

        console.log(prevSrc);

        //changes big image to 'img/2.jpg' or 'img/3.jpg', etc
        $('.bigimage').attr('src', image);
    })
//adds bigimage_wrapper class. the background for the enlarged image
    $('.bigimage_wrapper').click(function() {
        $('.bigimage_wrapper').addClass('bigimage_wrapper_hidden');
    })

//filter function
    $('.filter_all').click(function(event){
        event.preventDefault();
        console.log('NA Filter!');
        $(this).parent().siblings().removeClass('filter_active');   
        $('.asia').fadeIn(700)
        $('.north_america').fadeIn(700);
        $('.south_america').fadeIn(700);
        $('.europe').fadeIn(700);
        $('.oceania').fadeIn(700);
    })

//filters out photos not in North America
  $('.filter_NA').click(function(event){
        event.preventDefault();
        $(this).parent().addClass('filter_active').siblings().removeClass('filter_active');

        console.log('NA Filter!');
        $('.north_america').fadeIn(500);
        $('.oceania').fadeOut(500);
        $('.south_america').fadeOut(500);
        $('.asia').fadeOut(500);
        $('.europe').fadeOut(500);
    })

//filters out photos not in South America
    $('.filter_SA').click(function(event){
        event.preventDefault();
        $(this).parent().addClass('filter_active').siblings().removeClass('filter_active');
        console.log('SA Filter!');
        $('.south_america').fadeIn(500);
        $('.oceania').fadeOut(500);
        $('.asia').fadeOut(500);
        $('.north_america').fadeOut(500);
        $('.europe').fadeOut(500);
    })

//filters out photos not in Europe
    $('.filter_EU').click(function(event){
        event.preventDefault();
        $(this).parent().addClass('filter_active').siblings().removeClass('filter_active');
        console.log('EU Filter!');
        $('.europe').fadeIn(500)
        $('.oceania').fadeOut(500);
        $('.south_america').fadeOut(500);
        $('.north_america').fadeOut(500);
        $('.asia').fadeOut(500);
    })

//filters out photos not in Oceania
      $('.filter_OC').click(function(event){
        event.preventDefault();
        $(this).parent().addClass('filter_active').siblings().removeClass('filter_active');
        console.log('OC Filter!');
        $('.oceania').fadeIn(500);
        $('.asia').fadeOut(500);
        $('.south_america').fadeOut(500);
        $('.north_america').fadeOut(500);
        $('.europe').fadeOut(500);
    })

//filters out photos not in Asia
       $('.filter_AZ').click(function(event){
        event.preventDefault();
        $(this).parent().addClass('filter_active').siblings().removeClass('filter_active');    
        console.log('AZ Filter!');
        $('.asia').fadeIn(500);
        $('.oceania').fadeOut(500);
        $('.south_america').fadeOut(500);
        $('.north_america').fadeOut(500);
        $('.europe').fadeOut(500);
    })
})
