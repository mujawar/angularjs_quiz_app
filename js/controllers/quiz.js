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
            vm.selectAnswer = selectAnswer;
            vm.activeQuestion = 0;
            var numQuestionAnswered = 0;
            var quizLength = DataService.quizQuestions.length;
            vm.error = false;
            vm.finalize = false;
            vm.finalizeAnswer = finalizeAnswer;

            function setActiveQuestion(index) {
                if(index === undefined){
                    var breakOut =false;
                    var quizLengthsas = DataService.quizQuestions.length-1;
                    while(!breakOut){
                        vm.activeQuestion = vm.activeQuestion < quizLengthsas?++vm.activeQuestion:0;
                        if( vm.activeQuestion === 0){
                            vm.error = true;
                        }
                        if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                            breakOut = true;
                        }
                    }
                }else{
                    vm.activeQuestion = index;
                }
            }

            function questionAnswered() {
                if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionAnswered++;
                    if(numQuestionAnswered >= quizLength){
                        for(var i = 0 ; i <quizLength ; i++){
                            if(DataService.quizQuestions[i].selected === null){
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        vm.error = false;
                        vm.finalize = true;
                        return;
                    }
                }
                vm.setActiveQuestion();
            }
            function selectAnswer(index) {
                DataService.quizQuestions[vm.activeQuestion].selected = index;
            }

            function finalizeAnswer() {
                vm.finalize = false;
                numQuestionAnswered = 0;
                vm.activeQuestion = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz",false);
                quizMetrics.changeState("results",true);

            }
        }
        
        


    })();
