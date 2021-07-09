
$(document).ready(function(){
  var quesArray = ["q1", "q2", "q3", "q4", "q5"];
  var firstQues = Math.floor(Math.random() * quesArray.length);
  var currentQues = firstQues;
  var score = 0;
  var highScores = [];

 

var totalTime = 120;
var startTime = document.getElementById('count-down');


 
var timer = setInterval(decrease, 1000);
function decrease() {
    if (totalTime >= 1) {
        totalTime--;
      startTime.innerText = totalTime; 
      
    }
    if (totalTime <= 0) {
    startTime.innerText = 0;
    $("#" + quesArray[currentQues]).removeClass("questions-1")
    $(".high_score").addClass("questions-1")
        $(".qg_bottom").addClass("questions")
        clearInterval(timer)
       
    }
}
$("#start").click(function(){
    $(".qg_box1").addClass("questions")
    $(".qg_box2").removeClass("questions")
    setTimeout(timer, 0);
    $("#" + quesArray[firstQues]).addClass("questions-1")
})








    $("input[type=radio]").click(function() {
   //getting name attribute if radio which is clicked
   
  if ($(this).is("input[valid='correct']")) {
      score += 20;

  }
  else {

    totalTime -= 12;
  }
  $("#score").text(score)
   //loop only through those radio where name is same
   $("#"+quesArray[currentQues]+" input[type=radio]").each(function() {
     //if not selected
     if ($(this).is(":not(:checked)")) {
       // add disable
       $(this).attr('disabled', 'disabled');
     }
   });
   $("#next").attr("disabled", false)
 });
 $("#next").click(function(){
    $("#next").attr("disabled", true)
    $("#" + quesArray[currentQues]).removeClass("questions-1")
    quesArray.splice(currentQues,1);
    if(quesArray.length == 0){
        startTime.innerText = 0;
        $(".high_score").addClass("questions-1")
        $(".qg_bottom").addClass("questions")
        clearInterval(timer)
       }
       else{
        
        
        var nextQues = Math.floor(Math.random() * quesArray.length);
        
        $("#" + quesArray[nextQues]).addClass("questions-1")
        currentQues = nextQues;
       }

 })

 $("#submit").click(function(){
    

     var initials = $(".initials").val()
     var player = {
    initials: initials,
    score: score
   }
   highScores.push(player);

   $(".high_score").removeClass("questions-1")
   $(".scoreboard").empty()
for(var i = 0; i < highScores.length; i++){
    var name = highScores[i].initials
    var playerScore = highScores[i].score
    var scoreBoardEntry = "<li>" + name + " : " + playerScore +"</li>"
    $(".scoreboard").append(scoreBoardEntry)


   
}
console.log(highScores)
$(".scoreboard").removeClass("questions")
    $("#goback").addClass("questions-1")

 });

 $("#goback_btn").click(function(){
     console.log(highScores)
    $(".qg_box2").addClass("questions")
    $(".qg_box1").removeClass("questions")
    clearInterval(timer)
    quesArray = ["q1", "q2", "q3", "q4", "q5"];
    score = 0;
    totalTime = 120;
    firstQues = Math.floor(Math.random() * quesArray.length);
    currentQues = firstQues;
    $(".scoreboard").addClass("questions")
    $("input[type=radio]").each(function() {
        $(this).attr('disabled', false);
        $(this).prop('checked', false);
    })
    $("#goback").addClass("questions").removeClass("questions-1")
    $(".qg_bottom").removeClass("questions")
    $(".initials").val("")
    timer = setInterval(decrease, 1000);
 })

 });

