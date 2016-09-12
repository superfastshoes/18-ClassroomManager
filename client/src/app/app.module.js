(function(){
	'use strict'

	angular
		.module('app', ['ui.router'])
		.value('apiUrl', 'http://localhost:54791/api')
		.config(appConfig);

			appConfig.$inject = ["$urlRouterProvider", "$stateProvider"]
			
			function appConfig($urlRouterProvider, $stateProvider){
			$urlRouterProvider.otherwise('dashboard');

			$stateProvider //Defines the pages in the application, I need to define 7 states
/*********************************************************************************************/				
				//Dashboard
				.state('dashboard', {
					url: '/dashboard',
					templateUrl: 'app/dashboard/dashboard.html',
					controller: 'DashboardController as dash'
				})
/*********************************************************************************************/
				//Students
				.state('students', {
					url: '/students',
					abstract: true,
					template: '<div ui-view></div>'
				})
					.state('students.grid', {
						url: '/grid',
						templateUrl: 'app/students/student.grid.html',
						controller: 'StudentGridController as studentGrid'
					})
					.state('students.detail', {
						url: '/detail?studentId',
						templateUrl: 'app/students/student.detail.html',
						controller: 'StudentDetailController as studentDetail'
					})

/*********************************************************************************************/
				//Projects
				.state('projects', {
					url: '/projects',
					abstract: true,
					template: '<div ui-view></div>'
				})
					.state('projects.grid', {
						url: '/grid',
						templateUrl: 'app/projects/project.grid.html',
						controller: 'ProjectGridController as projectGrid'
					})
					.state('projects.detail', {
						url: '/detail?projectId',
						templateUrl: 'app/projects/project.detail.html',
						controller: 'ProjectDetailController as projectDetail'
					});
		};
})();