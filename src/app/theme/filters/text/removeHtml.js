/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.theme')
        .filter('plainText', plainText);

    /** @ngInject */
    function plainText() {
        return function (text) {
            return text ? String(text).replace(/<[^>]+>/gm, '') : '';
        };
    }

})();
