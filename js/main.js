var answer = Math.floor((Math.random() * 100) + 1);
var counter = 0;

function guessingGame() {
  counter++;

  if (counter > 7) {
    document.getElementById("myBtn").disabled = true;
  }

   var guess = document.getElementById("guessInput").value
  if (guess == answer) {
   $("p").prepend("Congratulations! <br>");
   } else if (guess == "") {
   $("p").prepend("Please enter a number. <br>"); 
   } else if (guess > 100 || guess < 1) {
    $("p").prepend("Please only enter a number between 1 and 100! <br>")
   } else if (guess > answer) {
    $("p").prepend(guess + " is too high! Try Again! <br>");
   return
   } else if (guess < answer) {
    $("p").prepend(guess + " is too low! Try Again! <br>");
   return
   }


}
