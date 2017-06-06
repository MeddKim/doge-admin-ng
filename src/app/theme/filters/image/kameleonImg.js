/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme')
        .filter('kameleonImg', kameleonImg);

    /** @ngInject */
    function kameleonImg(layoutPaths) {
        return function (input) {
            return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
        };
    }

})();
