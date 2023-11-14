const DOMSelectors = {
  button: document.querySelector(".button"),
  cardlist: document.querySelector(".cardlist"),
  input: document.querySelector(".firstName"),
  imageID: document.querySelector(".image"),
  header: document.querySelector(".header"),
};
function clearInputField(input) {
  input.value = ""; // self explanatory
}

function deleteObject(event) {
  const selectedObject = event.target; // event will target said object that was clicked
  if (selectedObject.classList.contains("delete-button")) {
    // if the object classlist contains a deletebutton
    console.log(selectedObject.parentElement); // select the whole div
    selectedObject.parentElement.remove(); // delete the whole div
  }
}
function injectObject(header, input, card, image) {
  if (input && image && header) {
    // if the input is not null please continue wtih the code
    card.innerHTML = `<div class="innercard">
    <h1> ${header}</h1>
    <p>${input}</p> <!-- put input --!>
    <img class="userimage" src="${image}">
  </div>
  <button class="delete-button">Delete</button>`; // make the div's paragraph have the input and the delete button
    DOMSelectors.cardlist.appendChild(card); // put new card in cardlist
    card
      .querySelector(".delete-button")
      .addEventListener("click", deleteObject); // if delete button clicked, run deleteObject
  }
}
function createObject(header, input, image) {
  const newCard = document.createElement("div"); // create a div
  newCard.classList.add("carddiv"); // adds "carddiv" to class list
  injectObject(header, input, newCard, image);
}

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault(); // don't reload
  const input = DOMSelectors.input.value; // take user input
  const userImage = DOMSelectors.imageID.value;
  const userHeader = DOMSelectors.header.value;
  createObject(userHeader, input, userImage); // calls injectObject
  clearInputField(DOMSelectors.input);
  clearInputField(DOMSelectors.imageID);
  clearInputField(DOMSelectors.header);
});
