'use strict';

angular.module('myApp.menuCtrl', ['ngRoute'])
.controller('MenuCtrl', function ($scope, $translate, MenuService, $log) {
	$scope.spanish = navigator.language.substring(0,2) == "es" ? true : false;

	var menuMock = MenuService.getMenu();

	$scope.urlProject = menuMock.urlProject;
	$scope.titleProject = menuMock.titleProject;
	$scope.generateMenu = menuMock.menu;

	$scope.changeLang = function (lang){
		$scope.spanish = lang == "es" ? true : false;
		$translate.use(lang);
	}
});