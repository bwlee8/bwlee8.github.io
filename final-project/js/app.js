$(document).ready(function() {
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

    $('.bigimage_wrapper').click(function() {
        $('.bigimage_wrapper').addClass('bigimage_wrapper_hidden');
    })

    $('.filter_all').click(function(event){
        event.preventDefault();
        console.log('NA Filter!');
        $('.asia').show(200)
        $('.north_america').show(200);
        $('.south_america').show(200);
        $('.europe').show(200);
        $('.oceania').show(200);
    })

    $('.filter_NA').click(function(event){
        event.preventDefault();
        console.log('NA Filter!');
        $('.north_america').css('display','inline-block');
        $('.asia').css('display','none');
        $('.south_america').css('display','none');
        $('.europe').css('display','none');
        $('.oceania').css('display','none');
    })

    $('.filter_SA').click(function(event){
        event.preventDefault();
        console.log('SA Filter!');
        $('.south_america').css('display','inline-block');
        $('.asia').css('display','none');
        $('.north_america').css('display','none');
        $('.europe').css('display','none');
        $('.oceania').css('display','none');
    })
    $('.filter_EU').click(function(event){
        event.preventDefault();
        console.log('EU Filter!');
        $('.europe').css('display','inline-block');
        $('.asia').css('display','none');
        $('.north_america').css('display','none');
        $('.south_america').css('display','none');
        $('.oceania').css('display','none');
    })
      $('.filter_OC').click(function(event){
        event.preventDefault();
        console.log('OC Filter!');
        $('.oceania').css('display','inline-block');
        $('.asia').css('display','none');
        $('.north_america').css('display','none');
        $('.south_america').css('display','none');
        $('.europe').css('display','none');
    })
       $('.filter_AZ').click(function(event){
        event.preventDefault();
        console.log('AZ Filter!');
        $('.asia').show()
        $('.ocenia').hide(400);
        $('.south_america').hide(400);
        $('.north_america').hide(400);
        $('.europe').hide(400);
       
        // $('.oceania').animate({display: 'none'});
        //  $('.north_america').animate({display: 'none'});
        //   $('.south_america').animate({display: 'none'});
        //    $('.europe').animate({display: 'none'});
        // $('.oceania').css('display','none');
        // $('.north_america').css('display','none');
        // $('.south_america').css('display','none');
        // $('.europe').css('display','none');
    })
})
