const flashcards = document.getElementsByClassName("flashcards")[0];
const createCard = document.querySelector(".create-box");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
var flash_number = 0
let contentArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem('items')) : [];

function getText( obj ) {
  return obj.textContent ? obj.textContent : obj.innerText;
}

contentArray.forEach(divMaker);

var close = document.getElementsByClassName("close");
var i;

flashcards.addEventListener("click", function(event) {
  if (event.target.classList.contains("close")) {
    var lala = event.target.parentElement;
    lala.style.display = "none";

    var del_question = getText(lala.querySelector("#q"));
    var del_answer = getText(lala.querySelector("#a"));
    var words = JSON.parse(localStorage.getItem('items')) || [];
    data = Object.entries(words);

    for (var i = words.length - 1; i >= 0; i--) {
      current = data[i];
      if (current[1]["my_answer"] == del_answer && current[1]["my_question"] == del_question) {
        words.splice(i,1);
      }
    }

    var new_items = JSON.stringify(words);

    // Check if there are no more items, then clear localStorage
    if (words.length === 0) {
      localStorage.clear();
    }

    localStorage.setItem("items", new_items);
    question.value = '';
    answer.value = '';

  }
});

    


function divMaker(text){
  var div = document.createElement("div");
  var li = document.createElement("li");
  var h2_question = document.createElement('h2');
  var h2_answer = document.createElement('h2');
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  div.className = 'flashcard';

  h2_question.id = "q"
  h2_question.setAttribute("style", "border-top:1px blue; padding: 15px; margin-top:30px");
  h2_question.innerHTML = text.my_question;
  h2_answer.id = "a"
  h2_answer.setAttribute("style", "text-align:center; display:none; color:blue");
  h2_answer.innerHTML = text.my_answer;

  span.className = "close";
  span.appendChild(txt);

  div.appendChild(h2_question);
  div.appendChild(h2_answer);
  div.appendChild(span);
  

  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none")
      h2_answer.style.display = "block";
    else
      h2_answer.style.display = "none";
  })

  flashcards.appendChild(div);
}

function addFlashcard(){
    if (question.value != '' && answer.value != '') {
        var flashcard_info = {
            'my_question' : question.value,
            'my_answer'  : answer.value
        }
    
        contentArray.push(flashcard_info);
        localStorage.setItem("items", JSON.stringify(contentArray));
        divMaker(contentArray[contentArray.length - 1]);
        question.value = '';
        answer.value = '';
    }
   
}

function delFlashcards(){
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
}

function showCreateCardbox(){
  createCard.style.display = "block";
}

function hideCreateBox(){
  createCard.style.display = "none";
}
