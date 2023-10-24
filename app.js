const DOMSelectors = {
  form: document.querySelector(form),
  button: document.querySelector(button),
  card: document.querySelector(card),
  cardlist: document.getElementsByClassName(listOfCards),
};

function clearInputField(object) {
  // clears object
  // clears input field
  DOMSelectors.object.value = "";
}
function removeObject(object) {
  //removes object from DOMSelectors
  // removes object
  delete DOMSelectors.object;
}
function addObject(object) {
  //adds object to DOMSelectors
  DOMSelectors.push({
    key: object,
    value: object.value,
  });
}
function createObject(object) {
  // creates object
  const object = document.querySelector({ object });
  addObject(object);
  clearInputField(object);
}
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault;
  let form = DOMSelectors.form.value; // don't forget .value
  createObject(card);
  DOMSelectors.cardlist.insertAdjacentHTML("afterbegin", `<p> ${card} </p>`);
});
