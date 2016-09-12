// 023(function(){
// 	'use strict'

// 	angular
// 		.module('app')
// 		.factory('updateFactory', updateFactory);

// 		updateFactory.$inject = ['$http', '$q','apiUrl'];
// /*********************************************************************************************/
// 		function updateFactory($http, $q, apiUrl){
// 			var service = {
// 				addStudents: addStudents,
// 				addProjects: addProjects
// 			};
// 			return service;
// /*********************************************************************************************/
// 			function addStudents(student) {
// 			var defer = $q.defer();

// 			$http.post(apiUrl + "/students", student)
// 				.then(
// 					function(){
// 						defer.resolve();
// 					},
// 					function(error){
// 						defer.reject(error);
// 					}
// 				);
// 			return defer.promise;
// 		}
// /*********************************************************************************************/
// 		function addProjects(project) {
// 			var defer = $q.defer();

// 			$http.post(apiUrl + "/projects", project)
// 				.then(
// 					function(){
// 						defer.resolve();
// 					},
// 					function(error){
// 						defer.reject(error);
// 					}
// 				);
// 			return defer.promise;
// 		}

// /*********************************************************************************************/
// 	//updating only the edit buttons
	
// 	// function updateStudent(assignment){
// 	// 	var defer = $q.defer();

// 	// 	$http.put(apiUrl + "/students/" + student.assignment, assignment)
// 	// 		 .then(
// 	// 		 	function(){
// 	// 		 		defer.resolve();
// 	// 		 	},
// 	// 		 	function(error){
// 	// 		 		defer.reject(error);
// 	// 		 	}
// 	// 		 );
// 	// 	return defer.promise;
// 	// }









// // function update(todo) {
// // 			var defer = $q.defer();

// // 			$http.put(apiUrl + "/Todoes/" + todo.todoId, todo)
// // 				.then(
// // 					function(){
// // 						defer.resolve();
// // 					},
// // 					function(error){
// // 						defer.reject(error);
// // 					}
// // 				);
// // 			return defer.promise;
// // 		}





// 		}
// })();