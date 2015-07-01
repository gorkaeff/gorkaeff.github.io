angular.module('myApp.skillService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('SkillService', function () {
	var skills = [
		{
			name : "AngularJS", 
			value: 9,
			description : "home.description_angularjs"
		},
		{
			name : "PHONEGAP", 
			value: 9,
			description : "home.description_phonegap"
		},
		{
			name : "Javascript", 
			value: 8,
			description : "home.description_javascript"
		},
		{
			name : "Java", 
			value: 7,
			description : "home.description_java"
		},
		{
			name : "PHP", 
			value: 6,
			description : "home.description_php"
		},
		{
			name : "Ruby On Rails", 
			value: 4,
			description : "home.description_rails"
		}
	];

	var links = [
		{
			url : "https://play.google.com/store/apps/developer?id=MyG+Apps",
			tag : "home.android_developer_account",
		},
		{
			url : "https://itunes.apple.com/es/artist/marcos-luqui/id960990562",
			tag : "home.ios_developer_account",
		},
		{
			url : "https://github.com/gorkaeff",
			tag : "home.github_link",
		},
		{
			url : "http://myg.herokuapp.com",
			tag : "home.web_link",
		}
	];
	
	return {
		getSkills : function (){
			return skills;
		},
		getSocialLinks : function (){
			return links;
		}
	}
});