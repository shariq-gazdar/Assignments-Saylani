let star = "*";

for (let i = 0; i < 6; i++) {
  console.log(star);
  star += "*";
}
for (let i = star.length; i > 1; i--) {
  //   console.log(str.slice(0, i));
  star = star.slice(0, i);
  console.log(star);
}
