/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme.components')
        .directive('widgets', widgets);

    /** @ngInject */
    function widgets() {
        return {
            restrict: 'EA',
            scope: {
                ngModel: '='
            },
            templateUrl: 'app/theme/components/widgets/widgets.html',
            replace: true
        };
    }

})();