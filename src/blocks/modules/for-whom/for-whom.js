import $ from 'jquery';

// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;


let windowWidth; 

windowWidth = $(window).width();
adaptive(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptive(windowWidth);
});

function adaptive(windowWidth) {
    switch(true) {
        case windowWidth < 600 && $('.for-whom__mobile .for-whom__maybe-img').length == 0: 
            $('.for-whom__mobile').append($('.for-whom__maybe-img'));
        break;
        case windowWidth > 600 && $('.for-whom__maybe .for-whom__maybe-img').length == 0: 
            $('.for-whom__maybe').append($('.for-whom__maybe-img'));
        break;
    }
}