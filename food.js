$(document).ready(function(){
    $('.control .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter =$(this).attr('data-filter');
        if (filter=='all'){
            $('.dish .image').show();
        }
        else{
            $('.dish .image').not('.'+filter).hide();
            $('.dish .image').filter('.'+filter).show();
        }
    });
});


