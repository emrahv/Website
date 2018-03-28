myApp.controller('mainPageController', function ($scope, $http, productService, pageManagement, $filter, whiteLabelService) {

    $scope.pageInit = function (language) {
        $scope.currentLanguage = language;
        $scope.organisation = {};
        $scope.setOrganisation();
        $scope.organisationSections = [];
        //$scope.setAnalytics();
        $scope.getOrganisationSections();
        $scope.getProductTree();
    };

    $scope.setAnalytics = function () {
        pageManagement.setAnalytics($scope.organisation.analyticsId);
    };

    $scope.setOrganisation = function () {
        whiteLabelService.getOrganisation($scope.currentLanguage).then(function (data) {
            $scope.organisation = data;
            $scope.setTitle();
        });
    };

    $scope.setTitle = function () {
        pageManagement.setTitle($scope.organisation.name, "");
    };

    $scope.getOrganisationSections = function () {
        pageManagement.getOrganisationSections($scope.currentLanguage).then(function (data) {
            $scope.organisationSections = data;
        });
    };

    $scope.getProductTree = function () {
        productService.getProductTree($scope.currentLanguage).then(function (data) {
            $scope.productTree = data;
        });
        productService.getTopLevelProducts($scope.currentLanguage).then(function (data) {
            $scope.topLevelProducts = data;
        });
    };
}
);