(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$stateParams', 'projectFactory', 'studentFactory', 'assignmentFactory'];

    function DashboardController($stateParams, projectFactory, studentFactory, assignmentFactory) {
        var vm = this;

        vm.allStudents = [];
        vm.studentLength = 0;
        vm.allProjects = [];
        vm.projectLength = 0;
        vm.allAssignments = [];
        vm.assignmentLength = 0;

        getAllStudents();
        getAllProjects();
        getAllAssignments();


        /***************************************************************************************/
        function getAllStudents() {
            studentFactory.getAll().then(
                function(data) {
                    vm.allStudents = data;
                    console.log("Got the Students");
                    vm.studentLength = vm.allStudents.length;
                },
                function(error) {
                    //TODO: Show a toastr to the user
                }
            );
        }
        /***************************************************************************************/
        function getAllProjects() {
            projectFactory.getAll().then(
                function(data) {
                    vm.allProjects = data;
                    console.log("Got the Projects");
                    vm.projectLength = vm.allProjects.length;
                },
                function(error) {
                    //TODO: Show a toastr to the user
                }
            );
        }
        /***************************************************************************************/
        function getAllAssignments() {
            assignmentFactory.getAll().then(
                function(data) {
                    vm.allAssignments = data;
                    console.log("Got the Assignments");
                    vm.assignmentLength = vm.allAssignments.length;
                },
                function(error) {
                	//TODO: Show a toastr to the user
                }
            );
        }
        /***************************************************************************************/
    }

})();
