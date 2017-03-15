(function () {
    angular
        .module('myApp')
        .controller('listCtrl',ListController);
    ListController.$inject = ['quizMetrics','DataService'];
    
    
        function ListController(quizMetrics,DataService) {
            var vm =this;
            vm.quizMetrics = quizMetrics;
            vm.data=DataService.turtlesData;
            vm.activeTurtle={};
            vm.changeActiveTurle = changeActiveTurle;
            vm.avtivateQuiz = avtivateQuiz;
            vm.search = '';


            function changeActiveTurle(index) {
                vm.activeTurtle = index;
            }

            function avtivateQuiz() {
                quizMetrics.changeState("quiz",true);
            }
        }



})();