(function () {
    'use strict';

    angular.module('Doge.theme')
        .directive('ngFileSelect', ngFileSelect);

    /** @ngInject */
    function ngFileSelect() {
        return {
            link: function ($scope, el) {
                el.bind('change', function (e) {
                    $scope.file = (e.srcElement || e.target).files[0];
                    $scope.getFile();
                })
            }
        }
    }

})();