(function(){
	'use strict';

	angular
		.module('app')
		.controller('StudentGridController', StudentGridController);

	StudentGridController.$inject = ['$stateParams', '$state', 'studentFactory'];

	function StudentGridController($stateParams, $state, studentFactory){
		var vm = this;
		
		vm.studentList = [];
		vm.studentId = $stateParams.studentId;
		vm.removeStudent = removeStudent;
		getAllStudents();

		

/***************************************************************************************/
		function getAllStudents(){
			studentFactory.getAll()
							.then(function(data){
								vm.studentList = data;
								console.log(vm.studentList);
							},
							function(error){

							}
						);
		}
/***************************************************************************************/
		function removeStudent(student){
			if (confirm("Are you sure you want to remove this student?")){
				studentFactory.remove(student).then(
					function(){
						var index = vm.studentList.indexOf(student);
						vm.studentList.splice(index, 1);
						console.log("Removed");
					}
				);
			}
		}
	}

})();