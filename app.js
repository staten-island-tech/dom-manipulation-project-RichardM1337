const DOMSelectors = [
  {
    form: document.querySelector("form"),
    button: document.querySelector(".button"),
    card: document.querySelector("card"),
    cardlist: document.querySelector(".listOfCards"),
  },
];

function clearInputField(object) {
  // clears object
  // clears input field
  DOMSelectors.object.value = "";
}
function removeObject(object) {
  //removes object from DOMSelectors
  delete DOMSelectors.object.remove;
}
function addObject(object) {
  //adds object to DOMSelectors
  DOMSelectors.push({
    key: `${object}`,
    value: document.querySelector(`.${object}`),
  });
}
function createObject(object) {
  // creates object
  object = document.querySelector(`.${object}`);
  addObject(object);
  clearInputField(object);
}
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault;
  let form = DOMSelectors.form.value; // don't forget .value
  createObject("card");
  DOMSelectors.cardlist.insertAdjacentHTML("afterbegin", `<p> ${card}</p>`);
  DOMSelectors.card.innerHTML(`${form}`);
});
//create img,text,id, add adjacet html when submitted. fix functions mayb
