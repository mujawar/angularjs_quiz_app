/**
 * Created by arif on 15/03/17.
 */

(function () {
        angular
            .module('myApp')
            .controller('quizCtrl', QuizController);

    QuizController.$inject = ['quizMetrics','DataService'];

        function QuizController(quizMetrics,DataService) {
            var vm = this;
            vm.quizMetrics =quizMetrics;
            vm.DataService = DataService;
            vm.questionAnswered = questionAnswered;
            vm.setActiveQuestion = setActiveQuestion;
            vm.avtiveQuestion = 0;
            var numQuestionAnswered = 0;
            var quizLength = DataService.quizQuestions.length;

            function setActiveQuestion() {
                var breakOut =false;
                var quizLengthsas = DataService.quizQuestions.length-1;
                while(!breakOut){
                    vm.avtiveQuestion = vm.avtiveQuestion < quizLengthsas?++vm.avtiveQuestion:0;
                    if(DataService.quizQuestions[vm.avtiveQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }

            function questionAnswered() {
                if(DataService.quizQuestions[vm.avtiveQuestion].selected !== null){
                    numQuestionAnswered++;
                    if(numQuestionAnswered >= quizLength){
                        //
                    }
                }
                vm.setActiveQuestion();
            }
        }
        
        


    })();
