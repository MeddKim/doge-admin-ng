(function () {
    'use strict';

    angular.module('Doge.pages.article')
        .controller('ArticleCreateCtrl', ArticleCreateCtrl);

    /** @ngInject */
    function ArticleCreateCtrl($stateParams) {
        var vm = this;
        console.log(doc);
        console.log(doc.getElementById("MyId"));
        var simplemde = new SimpleMDE({ element: document.getElementById("MyId") }); 
        console.log(SimpleMDE);   
    }

})();