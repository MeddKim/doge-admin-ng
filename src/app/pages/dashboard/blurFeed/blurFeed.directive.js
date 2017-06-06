/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.dashboard')
        .directive('blurFeed', blurFeed);

    /** @ngInject */
    function blurFeed() {
        return {
            restrict: 'E',
            controller: 'BlurFeedCtrl',
            templateUrl: 'app/pages/dashboard/blurFeed/blurFeed.html'
        };
    }
})();