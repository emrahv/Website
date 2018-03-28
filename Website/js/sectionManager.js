myApp.directive('mngSection', function ($http, productService, pageManagement, $filter) {
	
var template = '<div ng-include="getContentUrl()" ng-repeat="sectionData in [resultData]"></div>';
	
	var link = function (scope,element, attributes) 
	{		
		scope.getContentUrl = function()
		{
			if(scope.templateName)
            {
				return "/pages/" + scope.templateName + ".html";
			}
		}
		scope.getResultData = function()
		{
			return scope.resultData;
		}
     };
	
	var controller = function($scope, $element, $attrs) 
	{		
		$scope.smallCarousel = {};
        $scope.smallCarousel.currentImage = 0;

        $scope.smallCarousel.setImage = function (newIndex) {
            $scope.smallCarousel.currentImage = newIndex;
        };

        $scope.getChildrenData = function () {
            productService.getChildren(queryString.id, $scope.language).then(function (data) {
                $scope.resultData = data;
            });
        };

        $scope.getRelatedProducts = function () {
            productService.getRelatedProducts(queryString.id, $scope.language).then(function (data) {
                $scope.resultData = data;
            });
        };	

        $scope.getSectionDetails = function (id, language) {
            pageManagement.getSection(id, language).then(function (data) {
                $scope.resultData = data;
                $scope.templateName = $scope.resultData.templateName;
                $scope.resultData.dataModel = $.parseJSON($scope.resultData.dataModel);
            });
        };

        $scope.getSection = function () {
            
            $scope.resultData = $.parseJSON($scope.data);
            $scope.templateName = $scope.resultData.templateName;

            if ($scope.resultData.dataModel) {
                $scope.resultData.dataModel = $.parseJSON($scope.resultData.dataModel);
            }
            
            switch ($scope.templateName)
            {
                case "childProducts":
                    $scope.getChildrenData();
                    break;
                case "relatedProducts":
                    $scope.sectionTitle = $scope.resultData.dataModel.title;
                    $scope.getRelatedProducts();
                    break;
                case "imageCarousel":
                    $scope.resultData = JSON.parse($scope.brandingpackagedata);
                    break;
            }

        };

        if ($scope.data) {
            $scope.getSection();
        }
        else
        {
            if ($scope.imageCarouselData) {
                $scope.templateName = "modelCarousel";
                $scope.resultData = $scope.imageCarouselData;
            }
            else {
                $scope.getSectionDetails($scope.id, $scope.language);
            }
        };

        $scope.setClass = function (width) {
            if (!width) { return; }
            return pageManagement.setClassByWidth(JSON.parse(width));
        };	
						
	};
			
    return {
        //transclude:true,
        restrict: 'E',
        scope: { id: '@', language: '@', imageCarouselData: '=', brandingpackagedata: '@', data: '@' },
        link: link,
        controller: controller,
        template: template
    };
});