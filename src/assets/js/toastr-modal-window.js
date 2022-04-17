let toastrModalWindow = (function ($) {
    let init = function (settings) {
        $.extend(config, settings || {});

        try {
            installToastrOptions();
            showModal();
        } catch (error) {
            console.log(error.message);
        }
    };

    let config = {
        defaultToastrOptions: {
            'closeButton': false,
            'debug': false,
            'newestOnTop': false,
            'progressBar': false,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '60000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        },
    }

    let installToastrOptions = function () {
        toastr.options = config.toastrOptions ?? config.defaultToastrOptions;
    }

    let showModal = function () {
        if (config.type === undefined || config.type === null || config.message === undefined || config.message === null) {
            return;
        }

        toastr[config.type](config.message, getHeader());
    }

    let getHeader = function () {
        if (config.type === undefined || config.type === null || config.type === '') {
            return '';
        }

        let customHeader = config.header ?? null;

        if (customHeader !== null) {
            return customHeader;
        }

        switch (config.type) {
            case 'error':
                return 'Ошибка';
            default:
                return '';
        }
    }

    return {
        init: init
    }
})(jQuery);

toastrModalWindow.init();