myApp.factory('productService', ['$http', '$filter', function ($http, $filter) {

    var getProductDetails = function (productId, language) {

        return $http(
            {
                method: 'GET',
                url: "/api/Product/Get",
                params: {
                    'language': language,
                    'id': productId
                }
            }).then(
            function (result) {
                return result.data;
            },
            function (error) {
                console.log("Error: Product cannot be found:" + productId);
                return {};
            });
    };

    var getFullProduct = function (productId, language) {

        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetFullProduct",
                params: {
                    'language': language,
                    'id': productId
                }
            }).then(
            function (result) {
                console.dir(result.data);
                return result.data;
            },
            function (error) {
                console.log("Error: Full Product cannot be found:" + productId);
                return {};
            });
    };

    var getParents = function (productId, language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetParents",
                params: {
                    'language': language,
                    'id': productId
                },
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Product parents cannot be found:" + productId);
            });
    };

    var getChildren = function (productId, language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetChildren",
                params: {
                    'language': language,
                    'id': productId
                },
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Child products cannot be found for product " + productId);
            });
    };

    var getSections = function (productId, language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetSections",
                params: {
                    'id': productId,
                    'language': language
                },
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Product sections cannot be found:" + productId);
            });
    };

    var getProductModels = function (productId, language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetModels",
                params: {
                    'language': language,
                    'id': productId
                },
            }).then(
            function (result) {
                if (result.data.length <= 0) { return; }
                return result.data;
            },
            function (result) {
                console.log("Error: Cannot get product models");
            });

    };


    var getProductTree = function (language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetProductTree",
                params: {
                    'language': language,
                    'includeBranding': false
                }
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Product Tree cannot be found.");
            });

    };

    var getTopLevelProducts = function (language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetTopLevelProducts",
                params: {
                    'language': language
                }
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Top LEvel products cannot be found.");
            });

    };

    var getRelatedProducts = function (productId, language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Product/GetRelatedProducts",
                params: {
                    'language': language,
                    'id': productId
                },
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Cannot get related products");
            });
    };

    var getMappedProduct = function (id) {

        $.getScript("/js/productMap.js", function () {

            checkProductMap(id);

        });
    };

    return {
        getProductDetails: getProductDetails,
        getParents: getParents,
        getChildren: getChildren,
        getSections: getSections,
        getProductModels: getProductModels,
        getProductTree: getProductTree,
        getTopLevelProducts: getTopLevelProducts,
        getRelatedProducts: getRelatedProducts,
        getFullProduct: getFullProduct
    };

}]);

myApp.factory('whiteLabelService', ['$http', '$filter', function ($http, $filter) {

    var getBrandDetails = function () {

        return $http(
            {
                method: 'GET',
                url: "/api/Localisation/BrandDetails"
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Brand Details cannot be retrieved");
            });		

    };

    var getOrganisation = function (language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Localisation/Organisation",
                params: { 'language': language }
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Organisation info cannot be retrieved");
            });
    };

    return {
        getBrandDetails: getBrandDetails,
        getOrganisation: getOrganisation
    };
}]);

myApp.factory('pageManagement', ['$http', '$filter', function ($http, $filter) {

    var getSection = function (sectionId, language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Localisation/Section",
                params: {
                    'language': language,
                    'id': sectionId
                },
            }).then(
            function (result) {
                return result.data;
            },
            function (result) {
                console.log("Error: Section cannot be found:" + $attrs.id);
            });
    };

    var getOrganisationSections = function (language) {
        return $http(
            {
                method: 'GET',
                url: "/api/Localisation/GetOrganisationSections",
                params: { 'language': language },
            }).then(
            function (result) {
                 return result.data;
            },
            function (result) {
                console.log("Error: Organisation Sections cannot be retrieved");
            });		
    };

    var setTitle = function (organisation, pageName) {

        var temp = organisation;

        if (pageName !== "") { temp += " - " + pageName; }

        document.title = temp
    };

    var setAnalytics = function (analyticsId) {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', analyticsId, 'auto');
        ga('send', 'pageview');
    };

    var setClassByCount = function (count) {
        var divider = Math.floor(12 / count);

        return "col-lg-" + divider + " col-md-" + divider + " col-xs-12";
    };

    var setClassByWidth = function (width)
    {
        var temp;
        if (width)
        { temp = "col-lg-" + width.lg + " col-md-" + width.md + " col-xs-" + width.xs; }
        return temp;
    }

    return {
        getSection: getSection,
        getOrganisationSections: getOrganisationSections,
        setTitle: setTitle,
        setAnalytics: setAnalytics,
        setClassByCount: setClassByCount,
        setClassByWidth: setClassByWidth
    };

}]);