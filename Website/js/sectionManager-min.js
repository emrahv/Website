﻿myApp.directive("mngSection", ["productService", "pageManagement", function (e, t, a, l) { return { restrict: "E", scope: { id: "@", language: "@", imageCarouselData: "=", brandingpackagedata: "@", data: "@" }, link: function (e, t, a) { e.getContentUrl = function () { if (e.templateName) return "/pages/" + e.templateName + ".html" }, e.getResultData = function () { return e.resultData } }, controller: function (a, l, n) { a.smallCarousel = {}, a.smallCarousel.currentImage = 0, a.smallCarousel.setImage = function (e) { a.smallCarousel.currentImage = e }, a.getChildrenData = function () { e.getChildren(queryString.id, a.language).then(function (e) { a.resultData = e }) }, a.getRelatedProducts = function () { e.getRelatedProducts(queryString.id, a.language).then(function (e) { a.resultData = e }) }, a.getSectionDetails = function (e, l) { t.getSection(e, l).then(function (e) { a.resultData = e, a.templateName = a.resultData.templateName, a.resultData.dataModel = $.parseJSON(a.resultData.dataModel) }) }, a.getSection = function () { switch (a.resultData = $.parseJSON(a.data), a.templateName = a.resultData.templateName, a.resultData.dataModel && (a.resultData.dataModel = $.parseJSON(a.resultData.dataModel)), a.templateName) { case "childProducts": a.getChildrenData(); break; case "relatedProducts": a.sectionTitle = a.resultData.dataModel.title, a.getRelatedProducts(); break; case "imageCarousel": a.resultData = JSON.parse(a.brandingpackagedata) } }, a.data ? a.getSection() : a.imageCarouselData ? (a.templateName = "modelCarousel", a.resultData = a.imageCarouselData) : a.getSectionDetails(a.id, a.language), a.setClass = function (e) { if (e) return t.setClassByWidth(JSON.parse(e)) } }, template: '<div ng-include="getContentUrl()" ng-repeat="sectionData in [resultData]"></div>' } }]);