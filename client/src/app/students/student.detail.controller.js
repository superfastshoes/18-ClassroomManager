(function(){
	'use strict';

	angular
		.module('app')
		.controller('StudentDetailController', StudentDetailController);

	StudentDetailController.$inject = ['$stateParams', '$state', 'studentFactory', 'projectFactory', 'assignmentFactory'];

	function StudentDetailController($stateParams, $state, studentFactory, projectFactory, assignmentFactory){
		var vm = this;

		vm.save = save;
		vm.assignProject = assignProject;

		getProjects();
		getAssignments();

/*********************************************************************************************/
		function getAssignments(){
			if($stateParams.studentId){
				studentFactory.getById($stateParams.studentId).then(
					function(student){
						vm.student = student;
					}
				);
			} else {
				vm.student = {};
			}
		}	
/*********************************************************************************************/
		function save(){
			if($stateParams.studentId){
				studentFactory.update(vm.student).then(
					function(){
						alert('Update Successful!');
					}
				);
			} else {
				studentFactory.create(vm.student).then(
					function() {
						alert('Create Successful!');
					}
				);
			}
		}
/*********************************************************************************************/
		function getProjects(){
			projectFactory.getAll().then(
                function(data) {
                    vm.projects = data;
                },
                function(error) {
                    //TODO: Show a toastr to the user
                }
            );
		} 
/*********************************************************************************************/
		function assignProject() {
			var assignment = {
				projectId: vm.selectedProject.projectId,
				studentId: vm.student.studentId
			};
			assignmentFactory.create(assignment).then(
				function() {
					alert('Assignment Added');
				}
			);

			//TODO: Issue a POST request, sending this assignment.
			// in other words, assignmentFactory.create(assignment);
		}
	}		
})();