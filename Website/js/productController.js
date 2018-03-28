myApp.controller('productController', function ($scope, $http, productService, $filter, pageManagement, whiteLabelService) {

    $scope.pageInit = function (language) {

        $scope.currentLanguage = language;

        if (queryString.id) {
            $scope.getProductDetails(queryString.id);
            //$scope.getParents(queryString.id);
            $scope.getSections(queryString.id);
            $scope.getProductModels(queryString.id);
            
            $scope.getProductTree();
            $scope.setOrganisation();
        }

    };

    $scope.setAnalytics = function () {
        pageManagement.setAnalytics($scope.organisation.analyticsID);
    };

    $scope.setTitle = function () {
        pageManagement.setTitle($scope.organisation.name, $scope.product.name);
    };

    $scope.getProductDetails = function (id) {
        
        $scope.product = {};

        productService.getProductDetails(id, $scope.currentLanguage).then(function (data) {

            $scope.product = data;

            if ($scope.product === null) {
                window.location.replace("/");
                return;
            }
        });
  };

    $scope.getParents = function (id) {
        productService.getParents(id, $scope.currentLanguage).then(function (data) {
            $scope.product.parents = data;
        });
    };
    
    $scope.getSections = function (id) {
        $scope.productSections = productService.getSections(id, $scope.currentLanguage).then(function (data) {
            $scope.product.sections = data;
        });
    };

    $scope.getProductModels = function (id) {
        productService.getProductModels(id, $scope.currentLanguage).then(function (data) {
            $scope.product.models = data;
        });
    };

    $scope.getProductTree = function () {
        productService.getProductTree($scope.currentLanguage, false).then(function (data) {
            $scope.productTree = data;
        });
    };

    $scope.setOrganisation = function () {
        whiteLabelService.getOrganisation($scope.currentLanguage).then(function (data) {
            $scope.organisation = data;
            $scope.setTitle();

            $scope.setAnalytics();
        });
    };
    $scope.setClass = function (count) {
        return pageManagement.setClassByCount(count);
    };
    $scope.setClassByWidth = function (widthData)
    {
        return pageManagement.setClassByWidth(widthData);
    };
    
}
);