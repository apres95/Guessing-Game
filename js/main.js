$(document).ready(function(){
    $(".high").hide();
    $(".low").hide();
    $(".correct").hide();
});

function guessingGame(min, max) {
   var answer = 80//Math.floor((Math.random() * 100) + 1);
   var guess = document.getElementById("guessInput").value
   console.log(guess)
   console.log(answer)
   if (guess == answer) {
   $(".correct").show();
   console.log("working")
   } else if (guess => answer)
}