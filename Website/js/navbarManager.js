myApp.directive('mngNavbar', ['$http', 'productService', 'whiteLabelService', '$filter', function ($http, productService, whiteLabelService, $filter) {
	
var template = '<div ng-include="getContentUrl()" ng-repeat="sectionData in [dataModel]"></div>';
	
	var link = function (scope,element, attributes) 
	{	
        scope.collapse = false;	
        
		scope.getContentUrl = function()
		{
			return "/pages/navbarMenu.html";

		}
		scope.getResultData = function()
		{
			return scope.resultData;
		}
		
     };
	
    var controller = function ($scope, $element, $attrs, $rootScope) 
    {
        whiteLabelService.getBrandDetails().then(function (data) {
            $scope.brandDetails = data;
            var iconLocation = "http:\\\\" + $scope.brandDetails.rootURL + "\\images\\" + $scope.brandDetails.iconList[0];
        });

        whiteLabelService.getOrganisation($scope.language).then(function (data) {
            $scope.organisation = data;
        });

        productService.getProductTree($scope.language, false).then(function (data) {
            $scope.productTree = data;
        });

        $scope.convertPhone = function (phone)
        {
            if (phone.substring(0, 2) == "00") { phone = "+" + phone.substring(2, 50); }
            return phone;
        }
	};
			
    return {
		//transclude:true,
		restrict: 'E',
		scope:{language:'@'},
		link:link,
		controller:controller,
		template:template
    };
}]);