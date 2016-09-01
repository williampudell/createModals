(function($){
    $.createModals = function(settings){
        var config = {
            'modalId':'modalBasic',
            'modalTitle':{
                'hasTitle': true,
                'modalTitleContent': 'Carregando'
            },
            'modalContent':{
                'hasContent': false,
                'modalBodyContent':''
            },
            'modalFooter': {
                'hasFooter':false,
                'modalFooterContent':''
            }
        };

        if(settings){
            $.extend(config, settings);
        }

        var modal = $("<div />").addClass("modal fade").css('display','none').attr({'id':config.modalId, 'data-backdrop':'static'});
        var dialog = $("<div />").addClass("modal-dialog");
        var content = $("<div />").addClass("modal-content");
        var header = $("<div />").addClass("modal-header");
        var body = $("<div />").addClass("modal-body");
        var footer = $("<div />").addClass("modal-footer");
        var button_close = $("<button />").attr({'type':'button','data-dismiss':'modal','aria-label':'Fechar'}).addClass('close');

        button_close.append($("<span />").attr('aria-hidden','true').html("&times;"));

        header.append(button_close);
        if(config.modalTitle.hasTitle){
            header.append($("<h4 />").html(config.modalTitle.modalTitleContent));
            content.append(header);
        }

        if(config.modalContent.hasContent){
            body.append($("<div />").addClass("row").append($("<div />").addClass("col-lg-12").html(config.modalContent.modalBodyContent)));
            content.append(body);
        }

        if(config.modalContent.hasFooter){
            footer.append($("<div />").addClass("row").append($("<div />").addClass("col-lg-12").html(config.modalFooter.modalFooterContent)));
            content.append(footer);
        }

        dialog.append(content);
        modal.append(dialog);

        return modal;

    }
})(jQuery);
