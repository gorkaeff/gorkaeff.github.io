'use strict';

angular.module('myApp.homeCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $translate, SkillService) {
	$scope.skills = SkillService.getSkills();
	$scope.socialLinks = SkillService.getSocialLinks();
});