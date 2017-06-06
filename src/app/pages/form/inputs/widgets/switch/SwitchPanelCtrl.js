/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.form')
        .controller('SwitchPanelCtrl', SwitchPanelCtrl);

    /** @ngInject */
    function SwitchPanelCtrl() {
        var vm = this;

        vm.switcherValues = {
            primary: true,
            warning: true,
            danger: true,
            info: true,
            success: true
        };
    }

})();
