const term = document.querySelector(".term")
const definition = document.querySelector(".definition")
const checkButton = document.querySelector(".check")
const nextButton = document.querySelector(".next")
const Button = document.querySelector(".button")
var areyouthere = 0
let contentArray = localStorage.getItem('items')

words = JSON.parse(contentArray)

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[1] ["my_question"]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1] ["my_answer"]}</h3>`
}


checkButton.addEventListener("click", function() {
    if (areyouthere < 2) {
        areyouthere = 3
        definition.style.display = "block";
        // Button.innerHTML = `<button class="check">Hide Definition</button> <button class="next">Next Definition</button>`
    } else {
        areyouthere = 0
        definition.style.display = "none";
        // Button.innerHTML = `<button class="check">Check Definition</button> <button class="next">Next Definition</button>`
    }

});

nextButton.addEventListener("click", function() {
   getRandomWord();
   areyouthere = 0
   definition.style.display = "none";
});