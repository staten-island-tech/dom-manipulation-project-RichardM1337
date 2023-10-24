const DOMSelectors = {
  form: document.querySelector(form),
  button: document.querySelector(button),
  card: document.querySelector(card),
};

function clearInputField(item) {
  // clears input field
  DOMSelectors.item.value = "";
}
function removeObject(item) {
  // removes object
  delete DOMSelectors.item;
}

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault;
  let form = DOMSelectors.form.value; // don't forget .value
});
