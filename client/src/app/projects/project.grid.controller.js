(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridController', ProjectGridController);

    ProjectGridController.$inject = ['$stateParams', '$state', 'projectFactory'];

    function ProjectGridController($stateParams, $state, projectFactory) {
        var vm = this;

        vm.projectList = [];
        vm.projectId = $stateParams.projectId;
        vm.removeProject = removeProject;
        getAllProjects();

/***************************************************************************************/
        function getAllProjects() {
            projectFactory.getAll().then(
                function(data) {
                    vm.projectList = data;
                },
                function(error) {
                    //TODO: Show a toastr to the user
                }
            );
        }
/***************************************************************************************/
        function removeProject(project) {
            if (confirm("Are you sure you want to remove this project?")){
                projectFactory.remove(project).then(
                    function(){
                        var index = vm.projectList.indexOf(project);
                        vm.projectList.splice(index, 1);
                        console.log("Removed");
                    }
                );
            }
        }
    }

})();
