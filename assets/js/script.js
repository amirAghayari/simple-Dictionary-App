`use strict`;

const word = document.querySelector(".searchInput");
const addBtn = document.querySelector(".searchBtn");
const form = document.querySelector(".searchForm");
const wordComponent = document.getElementById("wordContainer");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from submitting normally
  let inputValue = word.value.trim();
  wordComponent.style.opacity = "1";

  fetch(`${url}${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      wordComponent.innerHTML = `
      <div class="wordDiv">
        <h1>${inputValue}</h1>
    
      </div>
      
      <p class="pronoun">${data[0].phonetics[1].text}</p>
      
      <h2 class="definition">
        ${data[0].meanings[1].definitions[0].definition}
      </h2>


`;
    });
});
