let dice = document.querySelector(".dice");
let number = document.querySelector(".number");
let bulbBtn = document.querySelector(".bulbBtn");
let bulb = document.querySelector(".bulb");
btnClick = () => {
  console.log("Clicked");
  dice.classList.add("spin");
  let generatedNumber = Math.ceil(Math.random() * 6);
  console.log(generatedNumber);
  setTimeout(() => {
    number.innerHTML = generatedNumber;
    dice.src = `${generatedNumber}.png`;
    dice.classList.remove("spin");
  }, 2000);
};

bulbFunc = () => {
  if (bulbBtn.innerHTML == "Off") {
    bulb.src = "on.png";
    bulbBtn.innerHTML = "On";
  } else if (bulbBtn.innerHTML == "On") {
    bulbBtn.innerHTML = "Off";
    bulb.src = "off.png";
  }
};
