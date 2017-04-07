var answer = Math.floor((Math.random() * 100) + 1);

function guessingGame() {
   var guess = document.getElementById("guessInput").value
  if (guess == answer) {
   $("p").prepend("Congratulations! <br>");
   } else if (guess == "") {
   $("p").prepend("Please enter a number. <br>");
   } else if (guess > answer) {
    $("p").prepend(guess + " is too high! Try Again! <br>");
   return
   } else if (guess < answer) {
    $("p").prepend(guess + " is too low! Try Again! <br>");
   return
   } 
}