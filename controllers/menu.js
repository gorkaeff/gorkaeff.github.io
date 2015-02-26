'use strict';

angular.module('myApp.menu', ['ngRoute'])
.controller('MenuCtrl', function ($scope, $translate) {
	$scope.urlProject = 'https://github.com/gorkaeff/gorkaeff.github.io';
	$scope.titleProject = "menu.titleProject";
	$scope.generateMenu = [
		{url : "#/", tag : "menu.home"},
		{url : "#/contact", tag : "menu.contact"}
	];

	$scope.changeLang = function (lang){
		$translate.use(lang);
	}
});