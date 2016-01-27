'use strict';

angular.module('myApp.projectCtrl', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/project', {
		templateUrl: 'views/project/project.html',
		controller: 'ProjectCtrl'
	});
}])

.controller('ProjectCtrl', function ($scope, ProjectService) {
	ProjectService.getProjects().success(function (response){
		$scope.projects = response;
	})
	.error(function (err){
		console.log(err);
	});
});