const DOMSelectors = {
  form: document.querySelector("form"),
  button: document.querySelector(".button"),
  card: document.querySelector(".card"),
  cardlist: document.querySelector(".listOfCards"),
  input: document.querySelector(".firstName"),
};

function clearInputField(inputField) {
  // clears input field
  inputField.value = "";
}

function removeObject(objectKey) {
  // removes property from DOMSelectors
  delete DOMSelectors[objectKey];
}

function addObject(objectName, objectClassName) {
  // adds property to DOMSelectors
  const objectQuery = document.querySelector(`.${objectClassName}`); // tells dom where it is
  DOMSelectors[objectName] = [objectQuery];
}

function createObject(objectName, objectClassName) {
  // creates and adds an object to DOMSelectors
  addObject(objectName, objectClassName); // adds it to DOMSelectors
  clearInputField(objectName);
}
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = DOMSelectors.input.value; // don't forget .value
  const card = document.createElement("li");
  card.innerHTML = `<p>${inputValue}</p>
    <button type="button" class="delete-button">delete this card</button>`;
  DOMSelectors.cardlist.appendChild(card);
  clearInputField(DOMSelectors.input);
});

createObject("delete-button", "delete-button");
DOMSelectors.delete.addEventListener("click", function (event) {
  const parentCard = event.target.parentElement;
  DOMSelectors.cardlist.removeChild(parentCard);
});

// agenda
// do not accept empty forms
