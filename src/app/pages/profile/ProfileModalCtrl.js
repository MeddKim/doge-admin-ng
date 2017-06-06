/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.profile')
        .controller('ProfileModalCtrl', ProfileModalCtrl);

    /** @ngInject */
    function ProfileModalCtrl($scope, $uibModalInstance) {
        $scope.link = '';
        $scope.ok = function () {
            $uibModalInstance.close($scope.link);
        };
    }

})();