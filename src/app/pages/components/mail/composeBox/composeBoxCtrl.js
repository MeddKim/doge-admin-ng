/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.components.mail')
        .controller('composeBoxCtrl', composeBoxCtrl);

    /** @ngInject */
    function composeBoxCtrl(subject, to, text) {
        var vm = this;
        vm.subject = subject;
        vm.to = to;
        vm.text = text;
    }
})();