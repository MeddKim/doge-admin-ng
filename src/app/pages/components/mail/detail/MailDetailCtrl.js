/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components.mail')
        .controller('MailDetailCtrl', MailDetailCtrl);

    /** @ngInject */
    function MailDetailCtrl($stateParams, mailMessages) {
        var vm = this;
        vm.mail = mailMessages.getMessageById($stateParams.id);
        vm.label = $stateParams.label;
    }

})();
