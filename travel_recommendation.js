const searchbarValue = document.getElementById("searchbar").value.toLowerCase();
const suggestionsContainer = document.getElementById("suggestionsContainer");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");

url = "./travel_recommendation_api.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    showSuggestions(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function showSuggestions(data) {
  // Show suggestions based on searchbar value
  const countriesCard = document.createElement("div");
  countriesCard.classList.add("suggestionCard");
  countriesCard.innerHTML = `
                <img src=${data.countries[0].cities[0].imageUrl} id="suggestionImg" alt="img" />
                <div id="suggestionDetails">
                <p id="suggestionLocation">${data.countries[0].cities[0].name}</p>
                <p id="suggestionDescription">${data.countries[0].cities[0].description}</p>
                <button id="suggestionVisitBtn">Visit</button>
                </div>
              `;
  suggestionsContainer.appendChild(countriesCard);
}
