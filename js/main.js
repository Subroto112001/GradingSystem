const UserNumber = +prompt("Please Enter Your Subject Number : -");

if (UserNumber > 0 && UserNumber < 32) {
  document.getElementById("Portion1").innerHTML = "You Are Fail Brother";
} else if (UserNumber >= 32 && UserNumber <= 39) {
  document.getElementById("Portion1").innerHTML =
    " Congratulations! Your are Passed the Exam and your grade is D";
} else if (UserNumber >= 40 && UserNumber <=49) {
  document.getElementById("Portion1").innerHTML =
    " Congratulations! Your are Passed the Exam and your grade is C";
}
    
 else if (UserNumber >= 50 && UserNumber <=59) {
  document.getElementById("Portion1").innerHTML =
    " Congratulations! Your are Passed the Exam and your grade is B";
}
 else if (UserNumber >= 60 && UserNumber <=69) {
  document.getElementById("Portion1").innerHTML =
    " Congratulations! Your are Passed the Exam and your grade is -A";
}
 else if (UserNumber >= 70 && UserNumber <=79) {
  document.getElementById("Portion1").innerHTML =
    " Congratulations! Your are Passed the Exam and your grade is A";
}
 else if (UserNumber >= 80) {
  document.getElementById("Portion1").innerHTML =
    " Congratulations! Your are Passed the Exam and your grade is A+";
}


