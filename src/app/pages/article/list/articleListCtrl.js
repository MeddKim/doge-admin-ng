/**
 * @author Doge dev-team
 * created on 2016
 */
(function () {
    'use strict';

    angular.module('Doge.pages.article')
        .controller('ArticleListCtrl', ArticleListCtrl);

    /** @ngInject */
    function ArticleListCtrl($stateParams) {
        var vm = this;
        vm.rowCollection = [{"title":"java学习","author":"meddkim","type":"学习","专题":"java学习系列","tags":"java","contents":15,"publishTime":"2017-05-15 12:25:58"},
        {"title":"java学习","author":"meddkim","type":"学习","专题":"java学习系列","tags":"java","contents":15,"publishTime":"2017-05-15 12:25:58"},
        {"title":"java学习","author":"meddkim","type":"学习","专题":"java学习系列","tags":"java","contents":15,"publishTime":"2017-05-15 12:25:58"}];
    }

})();

