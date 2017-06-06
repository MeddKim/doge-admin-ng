/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components.mail')
        .controller('MailTabCtrl', MailTabCtrl);

    /** @ngInject */
    function MailTabCtrl(composeModal, mailMessages) {

        var vm = this;
        vm.navigationCollapsed = true;
        vm.showCompose = function (subject, to, text) {
            composeModal.open({
                subject: subject,
                to: to,
                text: text
            })
        };

        vm.tabs = mailMessages.getTabs();
    }

})();
