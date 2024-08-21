function showSuggestionsTwo() {
  const searchbarValue = document
    .getElementById("searchbar")
    .value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestionsContainer");
  suggestionsContainer.innerHTML = "";

  url = "./travel_recommendation_api.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const countries = data.countries.map((country) => country.cities);
      const beaches = data.beaches;
      const temples = data.temples;

      const allKeywords = [
        "beach",
        "beaches",
        "country",
        "countries",
        "temple",
        "temples",
      ];

      const searchResult = allKeywords.find((keyword) =>
        keyword.includes(searchbarValue)
      );

      if (searchResult === "beach" || searchResult === "beaches") {
        beaches.forEach((beach) => {
          const countriesCard = document.createElement("div");
          countriesCard.classList.add("suggestionCard");
          countriesCard.innerHTML = `
                <img src=${beach.imageUrl} id="suggestionImg" alt="img" />
                <div id="suggestionDetails">
                <p id="suggestionLocation">${beach.name}</p>
                <p id="suggestionDescription">${beach.description}</p>
                <button id="suggestionVisitBtn">Visit</button>
                </div>
              `;
          suggestionsContainer.appendChild(countriesCard);
        });
      } else if (searchResult === "country" || searchResult === "countries") {
        countries.forEach((country) => {
          country.forEach((city) => {
            const countriesCard = document.createElement("div");
            countriesCard.classList.add("suggestionCard");
            countriesCard.innerHTML = `
                <img src=${city.imageUrl} id="suggestionImg" alt="img" />
                <div id="suggestionDetails">
                <p id="suggestionLocation">${city.name}</p>
                <p id="suggestionDescription">${city.description}</p>
                <button id="suggestionVisitBtn">Visit</button>
                </div>
              `;
            suggestionsContainer.appendChild(countriesCard);
          });
        });
      } else if (searchResult === "temple" || searchResult === "temples") {
        temples.forEach((temple) => {
          const countriesCard = document.createElement("div");
          countriesCard.classList.add("suggestionCard");
          countriesCard.innerHTML = `
                <img src=${temple.imageUrl} id="suggestionImg" alt="img" />
                <div id="suggestionDetails">
                <p id="suggestionLocation">${temple.name}</p>
                <p id="suggestionDescription">${temple.description}</p>
                <button id="suggestionVisitBtn">Visit</button>
                </div>
              `;
          suggestionsContainer.appendChild(countriesCard);
        });
      } else {
        suggestionsContainer.innerHTML = `<p>No suggestions found.</p>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      suggestionsContainer.innerHTML = `<p>An error occurred while fetching data.</p>`;
    });
}

searchButton.addEventListener("click", showSuggestionsTwo);
