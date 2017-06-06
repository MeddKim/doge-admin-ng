/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.clients')
        .controller('customerCtrl', customerCtrl);

    /** @ngInject */
    customerCtrl.$inject = ['$scope', '$uibModal'];
    function customerCtrl($scope, $uibModal) {
        var vm = this;
        $scope.open = function (page, sideClass, size) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                windowClass: sideClass
            });
        };
        $scope.smartTablePageSize = 10;
        $scope.rowCollection = [
            {
                firstName: 'Laurent',
                lastName: 'Renard',
                birthDate: new Date('1987-05-21'),
                balance: 102,
                email: 'whatever@gmail.com'
            },
            {
                firstName: 'Blandine',
                lastName: 'Faivre',
                birthDate: new Date('1987-04-25'),
                balance: -2323.22,
                email: 'oufblandou@gmail.com'
            },
            {
                firstName: 'Francoise',
                lastName: 'Frere',
                birthDate: new Date('1955-08-27'),
                balance: 42343,
                email: 'raymondef@gmail.com'
            }
        ];
    }
})();
