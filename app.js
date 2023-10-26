const DOMSelectors = {
  form: document.querySelector(".form"),
  button: document.querySelector(".button"),
  input: document.querySelector(".firstName"),
  cardlist: document.querySelector(".listOfCards"),
};

function clearInputField(inputField) {
  inputField.value = "";
}

function deleteCard(event) {
  const cardToDelete = event.target.parentElement; // the button is the child
  DOMSelectors.cardlist.removeChild(cardToDelete);
}

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  const formValue = DOMSelectors.input.value;

  // Create a new list item (card) with the input value and a delete button
  const card = document.createElement("li");
  card.innerHTML =
    //design card
    `
    ${formValue}
    <button class="delete-button">Delete</button>
  `;

  DOMSelectors.cardlist.appendChild(card);
  clearInputField(DOMSelectors.input);
});

// Event delegation: Listen for clicks on the cardlist and if a delete button was clicked, remove the card
DOMSelectors.cardlist.addEventListener("click", deleteCard);
