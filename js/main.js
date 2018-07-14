
UIkit.util.on('#modal-full', 'show', function(){
    $('nav.fixed-top').css('z-index', '5');
});
UIkit.util.on('#modal-full', 'hide', function(){
    $('nav.fixed-top').css('z-index', '1030');
});