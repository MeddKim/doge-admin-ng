/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.ui.buttons')
        .controller('ButtonPageCtrl', ButtonPageCtrl);

    /** @ngInject */
    function ButtonPageCtrl($scope, $timeout) {
        $scope.progressFunction = function () {
            return $timeout(function () {
            }, 3000);
        };
    }

})();
