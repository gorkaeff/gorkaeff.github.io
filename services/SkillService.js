angular.module('myApp.skillService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('SkillService', function ($translate) {
	var skills = [
		{
			name : "AngularJS", 
			value: 9,
			description : "home.description_angularjs"
		},
		{
			name : "Phonegap", 
			value: 9,
			description : "home.description_phonegap"
		},
		{
			name : "Java", 
			value: 8,
			description : "home.description_java"
		},
		{
			name : "PHP", 
			value: 6,
			description : "home.description_php"
		}
	];
	
	return {
		getSkills : function (){
			return skills;
		}
	}
});