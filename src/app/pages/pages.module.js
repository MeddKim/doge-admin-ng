/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages', [
        'ui.router',

        'Doge.pages.dashboard',
        'Doge.pages.ui',
        'Doge.pages.components',
        'Doge.pages.form',
        'Doge.pages.tables',
        'Doge.pages.profile',
//my module
        // 'Doge.pages.clients',
        'Doge.pages.article'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        baSidebarServiceProvider.addStaticItem({
            title: 'Pages',
            icon: 'ion-document',
            subMenu: [{
                title: 'Sign In',
                fixedHref: 'auth.html',
                blank: true
            }, {
                title: 'Sign Up',
                fixedHref: 'reg.html',
                blank: true
            }, {
                title: 'User Profile',
                stateRef: 'profile'
            }, {
                title: '404 Page',
                fixedHref: '404.html',
                blank: true
            }]
        });
        // baSidebarServiceProvider.addStaticItem({
        //     title: 'Menu Level 1',
        //     icon: 'ion-ios-more',
        //     subMenu: [{
        //         title: 'Menu Level 1.1',
        //         disabled: true
        //     }, {
        //         title: 'Menu Level 1.2',
        //         subMenu: [{
        //             title: 'Menu Level 1.2.1',
        //             disabled: true
        //         }]
        //     }]
        // });
    }

})();
