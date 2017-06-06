/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme')
        .directive('includeWithScope', includeWithScope);

    /** @ngInject */
    function includeWithScope() {
        return {
            restrict: 'AE',
            templateUrl: function (ele, attrs) {
                return attrs.includeWithScope;
            }
        };
    }

})();
