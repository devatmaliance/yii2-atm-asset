let toastrModalWindow = (function ($) {
    let init = function (settings) {
        $.extend(config, settings || {});
        setup();
    };

    let config = {}

    let setup = function () {
        try {
            if (config.type === undefined || config.type === null || config.message === undefined || config.message === null) {
                return;
            }

            toastr[config.type](config.message);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        init: init
    }
})(jQuery);

toastrModalWindow.init();