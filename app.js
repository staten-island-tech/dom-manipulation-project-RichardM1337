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

function addObject(objectKey, objectValue) {
  // adds property to DOMSelectors
  DOMSelectors[objectKey] = objectValue; // bracket notation lets you access code dynamically
}

function createObject(objectClassName) {
  // creates and adds an object to DOMSelectors
  const newObject = document.querySelector(`.${objectClassName}`);
  addObject(objectClassName, newObject);
  clearInputField(newObject);
}

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = DOMSelectors.input.value; // don't forget .value
  createObject("card");
  DOMSelectors.cardlist.insertAdjacentHTML(
    "afterbegin",
    `<p>${inputValue}</p>`
  );
});
/*
const inputValue = DOMSelectors.input.value; // don't forget .value
  createObject("card");
  DOMSelectors.cardlist.insertAdjacentHTML(
    "afterbegin",
    `<p>${inputValue}</p>`
  );
});


if (DOMSelectors.card) {
    DOMSelectors.card.textContent = formValue; // use textContent instead of innerHTML for plain text*/
