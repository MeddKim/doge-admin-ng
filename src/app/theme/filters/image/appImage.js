/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme')
        .filter('appImage', appImage);

    /** @ngInject */
    function appImage(layoutPaths) {
        return function (input) {
            return layoutPaths.images.root + input;
        };
    }

})();
