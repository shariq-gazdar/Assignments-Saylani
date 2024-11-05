let para = document.querySelector("#para");
let showPara = document.querySelector(".showPara");
let searchPara = document.querySelector("#search");

const findPara = () => {
  const paraText = para.value;
  const searchText = searchPara.value;

  if (paraText.includes(searchText)) {
    const parts = paraText.split(searchText);

    showPara.innerHTML = parts.join(
      `<span class="bg-yellow-300">${searchText}</span>`
    );
  } else {
    showPara.innerHTML = "Search term not found in the paragraph.";
  }
};
