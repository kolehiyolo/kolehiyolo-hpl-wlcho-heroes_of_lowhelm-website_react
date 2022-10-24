// import $ from "jQuery";

function headerScript() {
    function setupHeaderToggle() {
        let counter = 0;
        $('.header-collapse-btn button i').click(function () {
            counter++;

            if ($('.header-navigation').hasClass('header-navigation-collapsed-active')) {
                $('.header-navigation').removeClass('header-navigation-collapsed-active');
                $('.header-navigation').addClass('header-navigation-collapsed-inactive');
        
                $('html ,body').removeClass('disable-scroll');
            } else {
                $('.header-navigation').removeClass('header-navigation-collapsed-inactive');
                $('.header-navigation').addClass('header-navigation-collapsed-active');
                
                if ($('.header-account').hasClass('header-account-collapsed-active')) {
                    $('.header-account').removeClass('header-account-collapsed-active');
                    $('.header-account').addClass('header-account-collapsed-inactive');
                }
        
                $('html, body').addClass('disable-scroll');
            }
        });
        
        $('.header-navigation-account').click(function () {
            if ($('.header-account').hasClass('header-account-collapsed-active')) {
                $('.header-account').removeClass('header-account-collapsed-active');
                $('.header-account').addClass('header-account-collapsed-inactive');
        
                $('html').removeClass('disable-scroll');
            } else {
                $('.header-account').removeClass('header-account-collapsed-inactive');
                $('.header-account').addClass('header-account-collapsed-active');
                
                if ($('.header-navigation').hasClass('header-navigation-collapsed-active')) {
                    $('.header-navigation').removeClass('header-navigation-collapsed-active');
                    $('.header-navigation').addClass('header-navigation-collapsed-inactive');
                }
        
                $('html').addClass('disable-scroll');
                
            }
        });
    };

    setupHeaderToggle();
}

headerScript();