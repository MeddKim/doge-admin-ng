/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.profile', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                title: 'Profile',
                templateUrl: 'app/pages/profile/profile.html',
                controller: 'ProfilePageCtrl',
            });
    }

})();
