let addDiv = document.querySelector(".wrapper");
let carUrl = "./image.png";
let cars = [
  { name: "Audi ", price: "1000" },
  { name: "Ferrari ", price: "1500" },
  { name: "Buggati ", price: "5000" },
];

cars.map((car) => {
  addDiv.innerHTML += `<div>
<img src=${carUrl} height="200px" />
  <p>${car.name}</p>
  <p>${car.price}</p>
  </div>`;
});
