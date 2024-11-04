let birthYear = +prompt("Enter Your Birth Year");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
document.write("Your Age is ", age);
