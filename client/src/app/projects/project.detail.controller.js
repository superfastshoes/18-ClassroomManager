(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectDetailController', ProjectDetailController);

    ProjectDetailController.$inject = ['$stateParams', '$state', 'projectFactory', 'studentFactory', 'assignmentFactory'];

    function ProjectDetailController($stateParams, $state, projectFactory, studentFactory, assignmentFactory) {
        var vm = this;

        vm.save = save;
        vm.assignStudent = assignStudent;

        getProject();
        getStudents();

        /*********************************************************************************************/
        
        function getProject() {
        	if($stateParams.projectId) {
        		projectFactory.getById($stateParams.projectId).then(
        			function(project) {
        				vm.project = project;
        			}
    			);
        	} else { 
        		vm.project = {};
        	}
        }
        /*********************************************************************************************/

        function save() {
        	if($stateParams.projectId) {
        		projectFactory.update(vm.project).then(
                    function() {
                        alert('update successful!');
                        //TODO: 
                    }
                );
        	} else {
        		projectFactory.create(vm.project).then(
                    function() {
                        alert('create successful!');
                    }
                );
        	}
        }
/*********************************************************************************************/
        function getStudents(){
            studentFactory.getAll().then(
                function(data) {
                    vm.students = data;
                },
                function(error){

                }
            );
        }
/*********************************************************************************************/
        function assignStudent() {
            var assignment = {
                projectId: vm.project.projectId,
                studentId: vm.selectedStudent.studentId
            };
            assignmentFactory.create(assignment).then(
                function() {
                    alert('Assignment Added');
                }
            );
        }       
    }

})();
