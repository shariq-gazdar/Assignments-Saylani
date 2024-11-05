let quotes = [
  "it's better to live one day as a loin rather than 100 days as a jackel - Tipu Sultan",
  "If you love life do not waste time, for time is what life is made up of - Bruce Lee",
  "All our dreams can come true, if we have the courage to pursue them. — Walt Disney",
];
let card = document.querySelector(".quoteContainer");
let randomNUmber = Math.round(Math.random() * 2);
card.innerHTML = quotes[randomNUmber];
