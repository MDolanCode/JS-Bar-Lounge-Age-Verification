//Bar Lounge Age Verification
var age = Number(prompt("What is your age?"))


if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
}

else if (age < 21) {
  console.log("You can enter, but not drink");
}

else {
  console.log("Come on in. You can drink.");
}

//if age is negative print "Come back once your out of the womb!"
if (age < 0) {
  console.log("Come back once you're out of the womb!");
}

//if age is 21 print "happy 21st birthday!"
if (age === 21) {
   console.log("Happy 21st Birthday!");
 }

//if age is odd print "your age is odd"
 if (age % 2 != 0) {
 console.log("your age is odd!");
 }

//SUPER BONUS: if age is perfect square print "perfect square!"
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!")
}
