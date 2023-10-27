const DOMSelectors = {
  button: document.querySelector(".button"),
  cardlist: document.querySelector(".cardlist"),
  input: document.querySelector(".firstName"),
};
function clearInputField(input) {
  input.value = ""; // self explanatory
}

function deleteObject(event) {
  const selectedObject = event.target; // event will target said object
  if (selectedObject.classList.contains("delete-button")) {
    // if the object contains a delete button (eg: one of our divs)
    selectedObject.parentElement.remove(); // delete its parent element
  }
}
function injectObject(input, card) {
  if (input) {
    // if the input is not null please continue wtih the code
    card.innerHTML = `<div>
    <h1>THIS IS YOUR CARD!!! WOAH!!!!</h1>
    <p>${input}</p> <!-- put code --!>
  </div>
  <button class="delete-button">Delete</button>`; // make the div's paragraph have the input and the delete button
    DOMSelectors.cardlist.appendChild(card); // put new card in cardlist (test)
    card
      .querySelector(".delete-button")
      .addEventListener("click", deleteObject); // if delete button clicked, run deleteObject
  }
}
function createObject(input) {
  const newCard = document.createElement("div"); // create a div
  injectObject(input, newCard);
} //testingtesting

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault(); // don't reload
  const input = DOMSelectors.input.value; // take user input
  createObject(input); // calls injectObject
  clearInputField(DOMSelectors.input); //clears inputfield
});
