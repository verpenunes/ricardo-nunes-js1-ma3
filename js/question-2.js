//question 2
const apiKey = "92cdd442b82347d19a77d32de0b995aa";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");

async function getModuleAssignment() {
    try {
        const response = await fetch(url);

        const data = await response.json();
    
        console.log(data);
    
        const games = data.results;
    
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < games.length; i++) {
            console.log(games[i].name);
            console.log(games[i].rating);
            console.log(games[i].tags.length);

            if (i === 8) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result">Name: ${games[i].name} <br> Rating: ${games[i].rating} <br> Tags: ${games[i].tags.length} </div>`;
        }
    } catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getModuleAssignment();