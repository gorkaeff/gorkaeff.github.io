angular.module('myApp.skillService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('SkillService', function () {
	var skills = [
		{name : "AngularJS", value: 9},
		{name : "Phonegap", value: 9},
		{name : "Java", value: 8},
		{name : "PHP", value: 6}
	];
	
	return {
		getSkills : function(){
			return skills;
		}
	}
});