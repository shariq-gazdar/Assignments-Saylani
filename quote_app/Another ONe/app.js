/* make a input bar */
/* add a button  */
/* call function on button click  */
/* get input value and puch into array  */
/* add a div container to display item  */
/* puch input value in div.innerhtml  */
let inputVal = document.querySelector(".firstCard");
let disp = document.querySelector(".secondCard");
const changeFunc = () => {
  console.log(inputVal.value);

  disp.innerHTML += inputVal.value;
};
