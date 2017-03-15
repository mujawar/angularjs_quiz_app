/**
 * Created by arif on 15/03/17.
 */
(function () {
   angular
       .module('myApp')
       .factory('quizMetrics',QuizMetrics)

      function QuizMetrics() {
      var quizObj = {
         quizActive :false,
          changeState :changeState
      }
      return quizObj;

      function changeState(state) {
          quizObj.quizActive = state;
      }
      }

})();

