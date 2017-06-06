/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme.components')
        .directive('msgCenter', msgCenter);

    /** @ngInject */
    function msgCenter() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
            controller: 'MsgCenterCtrl'
        };
    }

})();