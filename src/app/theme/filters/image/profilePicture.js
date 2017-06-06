/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme')
        .filter('profilePicture', profilePicture);

    /** @ngInject */
    function profilePicture(layoutPaths) {
        return function (input, ext) {
            ext = ext || 'png';
            return layoutPaths.images.profile + input + '.' + ext;
        };
    }

})();
