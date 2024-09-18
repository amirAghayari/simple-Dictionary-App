`use strict`;

const word = document.querySelector(".searchInput");
const addBtn = document.querySelector(".searchBtn");
const wordComponent = document.getElementById("wordContainer");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

addBtn.addEventListener("click", () => {
  let inputValue = word.value.trim();
  wordComponent.style.opacity = "1";

  fetch(`${url}${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      wordComponent.innerHTML = `
      <div class="wordDiv">
        <h1>${inputValue}</h1>
        <button type="button">
          <i class="fas fa-volume-up">${data[0].phonetics[0].audio}</i>
        </button>
      </div>
      
      <p class="pronoun">${data[0].phonetics[1].text}</p>
      
      <p class="definition>
      ${data[0].meanings[2].definitions[1].definition}</p>      
      
      `;
      console.log(data);
    });
});
