// Toggle menu
$('.menu-toggle').on('click', function(e){
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
    e.preventDefault();
});
