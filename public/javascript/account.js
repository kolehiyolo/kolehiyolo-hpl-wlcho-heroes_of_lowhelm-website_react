// import $ from "jQuery";
console.log("ACCOUNT SCRIPT RUN");

function accountScript() {
    function setupPaginatorTriggers() {
        var wallet = $("#wallet").hasClass('show');
        var setup = $("#setup").hasClass('show');
        var management = $("#management").hasClass('show');
        $('#connect-wallet').click(function(){
            if (wallet == false) {
            $('ul li').removeClass('active');
            $('#connect-wallet').addClass('active');
            $('#management, #setup').removeClass('show').addClass('hide');
            $("#wallet").removeClass('hide').addClass('show');
            }
        });
        $('#accManagement').click(function(){
            $('ul li').removeClass('active');
            $('#accManagement').addClass('active');
            $('#wallet, #setup').removeClass('show').addClass('hide');
            $("#management").removeClass('hide').addClass('show');
        });
        $('#authentication').on('click', function(){
            $('ul li').removeClass('active');
            $('#authentication').addClass('active');
            $('#wallet, #management').removeClass('show').addClass('hide');
            $("#setup").removeClass('hide').addClass('show');
        });
    };

    setupPaginatorTriggers();
}

accountScript();