myApp.controller("mainPageController", function (n, t, e, i, o, a) { n.pageInit = function (t) { n.currentLanguage = t, n.organisation = {}, n.setOrganisation(), n.organisationSections = [], n.getOrganisationSections(), n.getProductTree() }, n.setAnalytics = function () { i.setAnalytics(n.organisation.analyticsId) }, n.setOrganisation = function () { a.getOrganisation(n.currentLanguage).then(function (t) { n.organisation = t, n.setTitle() }) }, n.setTitle = function () { i.setTitle(n.organisation.name, "") }, n.getOrganisationSections = function () { i.getOrganisationSections(n.currentLanguage).then(function (t) { n.organisationSections = t }) }, n.getProductTree = function () { e.getProductTree(n.currentLanguage).then(function (t) { n.productTree = t }), e.getTopLevelProducts(n.currentLanguage).then(function (t) { n.topLevelProducts = t }) } });