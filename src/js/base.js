var Page = {
    init: function () {
        console.log('year!');
        Page.controlEvents();
    },
    controlEvents: function () {
        var toggleBtn = function (e) {
            e.preventDefault();
            $(this).addClass('cur').siblings('a').removeClass('cur');
        };
        $('.m-control').on('click', 'a', toggleBtn);
    }
};

$(document).ready(function() {
    Page.init();
});