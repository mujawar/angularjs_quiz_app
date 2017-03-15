/**
 * Created by arif on 15/03/17.
 */
(function () {
   angular
       .module('myApp')
       .factory('quizMetrics',QuizMetrics)
    QuizMetrics.$inject  = ['DataService'];
      function QuizMetrics(DataService) {
      var quizObj = {
         quizActive :false,
          resultsActive:false,
          changeState :changeState,
          correctAnswer:[],
          markQuiz:markQuiz,
          numCorrect:0
      }
      return quizObj;

      function changeState(metrix,state) {
         if(metrix === 'quiz'){
             quizObj.quizActive = state;
         }else if(metrix === 'results'){
             quizObj.resultsActive = state;
         }else {
            return false;
         }
      }
      function markQuiz() {
          quizObj.correctAnswer = DataService.correctAnswer;
          for(var i = 0 ; i < DataService.quizQuestions.length ; i++){
             if(DataService.quizQuestions[i].selected === DataService.correctAnswer[i] ){
                 DataService.quizQuestions[i].correct = true;
                 quizObj.numCorrect++;
             }else{
                 DataService.quizQuestions[i].correct = false;
             }
          }
      }
      }

})();

