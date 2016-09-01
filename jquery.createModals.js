/*
 * Plugin para a Criação de Modal dinâmicamente
 * https://github.com/williampudell/createModals
 *
 * Copyright 2016, William Pudell
 *
 * v 0.1
 * 2016-09-01
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function($){
    $.createModals = function(settings){
        /*
         * Configurações Basicas para a criação de um Modal
         * modalId = Id do Modal
         * modalTitle.hasTitle = Utilizado para Exibir ou Ocultar o Titulo do Modal
         * modalTitle.modalTitleContent = Texto do Titulo do Modal
         * modalBody.hasBody = Utilizado para Exibir ou Ocultar o Corpo do Modal
         * modalBody.modalBodyContent = Texto do Corpo do Modal
         * modalFooter.hasFooter = Utilizado para Exibir ou Ocultar o Rodapé do Modal
         * modalFooter.modalFooterContent = Texto do Rodapé do Modal
         */
        var config = {
            'modalId':'modalBasic',
            'modalTitle':{
                'hasTitle': true,
                'modalTitleContent': 'Carregando'
            },
            'modalBody':{
                'hasBody': false,
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

        if(config.modalBody.hasBody){
            body.append($("<div />").addClass("row").append($("<div />").addClass("col-lg-12").html(config.modalBody.modalBodyContent)));
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
