/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme.components')
        .directive('pageTop', pageTop);

    /** @ngInject */
    function pageTop() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/pageTop/pageTop.html'
        };
    }

})();