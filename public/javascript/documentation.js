// import $ from "jQuery";

function documentationScript() {
    function setFadeInAnimations() {
        console.log("setFadeInAnimations()");
        let animation = true;

        if (animation) {
            // * Scroll Trigger
            $(document).ready(function () {
                // * Animate initial content
                $(`.main-introduction *`).addClass("anim-after");

                // * Add the class names
                let scrollClasses = ["story", "assets", "gameplay", "additional_features", "token", "final"];

                $(window).scroll(function () {
                    let scrollTop = $(window).scrollTop();
                    let headerHeight = $('.header').height();
                    let scrollPoint = [];
                    for (let i = 0; i < scrollClasses.length; i++) {
                        scrollPoint[i] = $(`.main-${scrollClasses[i]}`).offset().top - headerHeight - 600;
                        // console.log(`scrollPoint[${i}] = ${scrollPoint[i]}`);
                    }

                    for (let i = 0; i < scrollPoint.length; i++) {
                        if (scrollTop > scrollPoint[i]) {
                            $(`.main-${scrollClasses[i]} *`).addClass('anim-after');
                        }
                    }
                });
            });
        }
    }

    function setupDocumentationToggle() {
        $('.header-documentation-toggle button').click(function () {
            if ($('.main-navigation').hasClass('main-navigation-collapsed-active')) {
                $('.main-navigation').removeClass('main-navigation-collapsed-active');
                $('.main-navigation').addClass('main-navigation-collapsed-inactive');

                console.log(`HIDE NAV`);
                $('html').removeClass('disable-scroll');
            } else {
                $('.main-navigation').removeClass('main-navigation-collapsed-inactive');
                $('.main-navigation').addClass('main-navigation-collapsed-active');

                console.log(`SHOW BETLOG`);
                $('html').addClass('disable-scroll');
            }
        });
    };

    setFadeInAnimations();
    setupDocumentationToggle();
}

documentationScript();