let marks = prompt("Enter Your Total Marks Out Of 100");
let percentage = (marks / 100) * 100;
let grade;
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}
document.write(`Your Grade is ${grade}`);
