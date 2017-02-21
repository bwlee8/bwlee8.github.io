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
})
