angular.module('myApp.skillService', [])
//---------------------------------------------------------------------------------------------------------------
.factory('SkillService', function () {

	var links = [
		{
			url : "https://play.google.com/store/apps/developer?id=MyG+Apps",
			tag : "home.android_account",
			classIcon : "fa fa-android fa-2x"
		},
		{
			url : "https://itunes.apple.com/es/artist/marcos-luqui/id960990562",
			tag : "home.apple_account",
			classIcon : "fa fa-apple fa-2x"
		},
		{
			url : "https://github.com/gorkaeff",
			tag : "home.github_account",
			classIcon : "fa fa-github fa-2x"
		},
		{
			url : "https://www.linkedin.com/in/gorkajusue",
			tag : "home.linkedin_account",
			classIcon : "fa fa-linkedin fa-2x"
		},
		{
			url : "http://myg.herokuapp.com",
			tag : "home.web_myg_account",
			classIcon : "fa fa-link fa-2x"
		},
		{
			url : "http://informatico.hol.es",
			tag : "home.web_personal_account",
			classIcon : "fa fa-link fa-2x"
		}
	];

	var tags = [
		{name : "Java", label: "label-default"},
		{name : "Javascript (AngularJS 1.x)", label: "label-default"},
		{name : "PHP (Laravel 5.X)", label: "label-default"},
		{name : "JQuery", label: "label-default"},
		{name : "C#", label: "label-default"},
		{name : "Phonegap / Cordova", label: "label-primary"},
		{name : "MySQL", label: "label-primary"},
		{name : "Eclipse IDE", label: "label-primary"},
		{name : "XCode IDE", label: "label-primary"},
		{name : "Visual Studio 2012", label: "label-primary"},
		{name : "Sublime Text", label: "label-primary"},
		{name : "Linux Ubuntu 14", label: "label-primary"},
		{name : "Mac", label: "label-primary"},
		{name : "Platform Telerik", label: "label-primary"},
		{name : "Wordpress", label: "label-info"},
		{name : "HTML5", label: "label-info"},
		{name : "CSS", label: "label-info"},
		{name : "Android (Phonegap)", label: "label-info"},
		{name : "iOS (Phonegap)", label: "label-info"},
		{name : "Git", label: "label-info"},
		{name : "Subversion (SVN)", label: "label-info"},
		{name : "Github", label: "label-info"}
	];
	
	return {
		getSocialLinks : function (){
			return links;
		},

		getAllTags : function (){
			return tags;
		}
	}
});