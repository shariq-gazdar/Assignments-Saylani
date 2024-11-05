let turn = true;

const handleGame = (e) => {
  if (!e.style.backgroundColor) {
    console.log("aa");
    if (turn === true) {
      e.style.backgroundColor = "red";
    } else {
      e.style.backgroundColor = "green";
    }
    turn = !turn;
  }
};
