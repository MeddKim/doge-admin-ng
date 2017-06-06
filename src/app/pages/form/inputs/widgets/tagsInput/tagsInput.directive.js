/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.form')
        .directive('tagInput', tagInput);

    /** @ngInject */
    function tagInput() {
        return {
            restrict: 'A',
            link: function ($scope, elem, attr) {
                $(elem).tagsinput({
                    tagClass: 'label label-' + attr.tagInput
                });
            }
        };
    }
})();