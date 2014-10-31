'use strict';
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

window.backgrounds = (function(){

    var init = function(durationInMs, fadeInMs){
        var duration    = durationInMs || 6000,
            fade        = fadeInMs || 1000;

        $('body').backstretch([
            'images/hpbg_1.jpg',
            'images/hpbg_2.jpg',
            'images/hpbg_3.jpg',
            'images/hpbg_4.jpg',
            'images/hpbg_5.jpg',
            'images/hpbg_6.jpg',
            'images/hpbg_7.jpg',
            'images/hpbg_8.jpg',
            'images/hpbg_9.jpg',
            'images/hpbg_10.jpg',
            'images/hpbg_11.jpg',
            'images/hpbg_12.jpg',
            'images/hpbg_13.jpg',
            'images/hpbg_14.jpg',
            'images/hpbg_15.jpg'
        ], {duration: duration, fade: fade});
    };

    return {
        init:init
    };


})();

window.navigation = (function(){

    var addListeners = function(target,togglable){
        $(target).click(function(e){
            e.preventDefault();
            $(togglable).toggleClass('visible');
        });
    };

    var init = function(selector){
        addListeners('#clients',selector);
    };

    return {
        init:init
    };

})();
