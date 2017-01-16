//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }
    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
    $.fn.equalHeight = function(){
        var global = this,
            maxHeigh = 0,
            tmpHeigh = 0;
        $(this).each(function(){
            tmpHeight = $(this).outerHeight();
            if(tmpHeight > maxHeigh){
                maxHeigh = tmpHeight;
            }
        })

        $(this).each(function(){
            $(this).css('min-height', maxHeigh);
        })
    }
  }(jQuery));

$(function(){
    $('.submenu').siblings('a').click(function(){
        var submenu = $(this).siblings('.submenu');
        $(this).closest('aside').find('.submenu').not(submenu).slideUp();
        $(submenu).slideToggle();
        return false;
    });


    $('.catalog-table__view .short').click(closeCatalogTableInfo);
    $('.catalog-table__view .full').click(openCatalogTableInfo);
    $('.catalog-table .toggle').click(function(){
        openCatalogTableInfo(this);
    });

    $('.totop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function(){
        var e = $('.totop');
        if($(window).scrollTop()!=0){
            $(e).fadeIn();
        }else{
            $(e).fadeOut();
        }
    });

    $('.companys-sort .lang a').click(function(){
        $(this).addClass('active');
        $(this).closest('ul').find('a').removeClass('active');
        var t = $(this).attr('href');
        $('.companys-sort').find('.letters').hide();
        $('.companys-sort').find('.'+t).show().css('display','inline-block');
        return false;
    });

    function openCatalogTableInfo(e){
        if($(e).is('button')){
            $(e).toggleClass('open');
            $(e).closest('.row1').next().toggleClass('open');
        }else{
            $('.catalog-table .row2, .catalog-table .toggle').each(function(){
                $(this).addClass('open');
            });
        }
    }

    function closeCatalogTableInfo(e){
        if($(e).is('button')){
            $(e).toggleClass('open');
            $(e).closest('.row1').next().toggleClass('open');
        }else{
            $('.catalog-table .row2, .catalog-table .toggle').each(function(){
                $(this).removeClass('open');
            });
        }
    }
});