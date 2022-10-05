$(function() {
    let config = {
        namespace: 'modalWindowNamespace',
    };

    let event = {
        click: 'click.' + config.namespace,
        hideBsModal: 'hide.bs.modal.' + config.namespace,
    };

    let selector = {
        body: 'body',
        modalWindow: '#modal-window',
        modalWindowContent: '#modal-window-content',
        modalWindowLink: '.modal-window-link',
    };

    let init = function() {
        unbindEvents();
        setup();
    };

    let unbindEvents = function() {
        $(document).off('.' + config.namespace);
    };

    let setup = function() {
        $(document).on(event.click, selector.modalWindowLink, createModalWindow);
        $(document).on(event.click, selector.modalWindowLink, showModalWindow);
        $(document).on(event.hideBsModal, selector.modalWindow, removeModalWindow);
    };

    let createModalWindow = function() {
        try {
            let title = $(this).data('modal-title') ?? '';

            if ($('#modal-window').length) {
                return;
            }

            let modalForm =
                '<div id="' + selector.modalWindow.substring(1) + '" class="modal fade" tabindex="-1" role="dialog">' +
                '  <div class="modal-dialog" role="document">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header">' +
                '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '          <span aria-hidden="true">&times;</span>' +
                '        </button>' +
                '        <h4 class="modal-title">' + title + '</h4>' +
                '      </div>' +
                '      <div id="' + selector.modalWindowContent.substring(1) + '" class="modal-body">' +
                '      </div>' +
                '    </div>' +
                '  </div>' +
                '</div>';

            $(selector.body).append(modalForm);
        } catch (error) {
            console.log(error);
            console.log('Не удалось создать модальное окно');
        }
    };

    let removeModalWindow = function() {
        setTimeout(function() {
            $(selector.modalWindow).remove();
        }, 200);
    };

    let showModalWindow = async function() {
        try {
            let form = await $.ajax({
                url: $(this).data('modal-url'),
                dataType: 'json',
                type: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: $(this).data('modal-attributes') ?? {},
            });

            $(selector.modalWindowContent).append(form);
            $(selector.modalWindow).modal('show');
        }
        catch (error) {
            console.log(error);
            toastr.error('Не удалось создать модальное окно', 'Ошибка');
        }
    };

    init();
});