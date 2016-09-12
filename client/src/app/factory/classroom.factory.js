// (function(){
// 	'use strict'

// 	angular
// 		.module('app')
// 		.factory('classroomFactory', classroomFactory);

// 		classroomFactory.$inject = ['$http', '$q','apiUrl'];

// 		function classroomFactory($http, $q, apiUrl){
// 			var service = {
// 				getAllStudents: getAllStudents,
// 				getAllProjects: getAllProjects,
// 				getAllAssignments: getAllAssignments,
// 				getProjectById: getProjectById
// 				// getById: getById,
// 				// update: update,
// 				// remove: remove
// 			};
// 			return service;
// /***************************************************************************************/
// 			function getAllStudents(){
// 				var defer = $q.defer();

// 				$http.get(apiUrl + '/students')
// 					 .then(
// 					 	function(response){
// 					 		defer.resolve(response.data);
// 					 	},
// 					 	function(error){
// 					 		defer.reject(error);
// 					 	}
// 					 );
// 				return defer.promise;
// 			}
// /***************************************************************************************/
// 			function getAllProjects(){
// 				var defer = $q.defer();

// 				$http.get(apiUrl + '/projects')
// 					 .then(
// 					 	function(response){
// 					 		defer.resolve(response.data);
// 					 	},
// 					 	function(error){
// 					 		defer.reject(error);
// 					 	}
// 					 );
// 				return defer.promise;
// 			}
// /***************************************************************************************/
// 			function getAllAssignments(){
// 				var defer = $q.defer();

// 				$http.get(apiUrl + '/assignments')
// 					 .then(
// 					 	function(response){
// 					 		defer.resolve(response.data);
// 					 	},
// 					 	function(error){
// 					 		defer.reject(error);
// 					 	}
// 					 );
// 				return defer.promise;
// 			}
// /***************************************************************************************/
// 			function getProjectById(id) {
// 				var defer = $q.defer();

// 				$http.get(apiUrl + '/projects/' + id)
// 					 .then(
// 				 		function(response) {
// 				 			defer.resolve(response.data);
// 				 		},
// 				 		function(error) {
// 				 			defer.reject(error);
// 				 		});

// 				return defer.promise;
// 			}

// /***************************************************************************************/
	
// 		}		
// })();