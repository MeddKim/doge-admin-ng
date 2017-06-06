/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme.components')
        .directive('backTop', backTop);

    /** @ngInject */
    function backTop() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/backTop/backTop.html',
            controller: function () {
                $('#backTop').backTop({
                    'position': 200,
                    'speed': 100
                });
            }
        };
    }

})();