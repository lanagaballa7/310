function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;
    
    if (question1 == "11"){
        correct++;
    }
    if (question2 == "Walt Disney"){
        correct++;
    }
     if (question3 == "Pixar"){ 
        correct++;
    }
var messages = ["Great job! ", "That's just okay", "You need  do better"];
var pictures = ["img/gotit.gif", "img/okay.gif", "img/fail.gif"];
 
var range;
    if (correct < 1){
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2){
        range  = 0;
    }
    
    document.getElementById("after-submit").style.visibility =  "visible";
    
    document.getElementById("message").innerHTML = messages[range]; 
    document.getElementById("number-correct").innerHTML = "you got " + correct + " correct. ";
   document.getElementById("pictures").src = pictures[range]; 
}