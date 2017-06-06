/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components.mail')
        .controller('MailListCtrl', MailListCtrl);

    /** @ngInject */
    function MailListCtrl($stateParams, mailMessages) {
        var vm = this;
        vm.messages = mailMessages.getMessagesByLabel($stateParams.label);
        vm.label = $stateParams.label;
    }

})();
