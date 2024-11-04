let str = "*******";
for (let i = str.length; i > 1; i--) {
  //   console.log(str.slice(0, i));
  str = str.slice(0, i);
  console.log(str);
}
