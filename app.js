const DOMSelectors = [{ test: document.getElementById("test") }];
function injectObject(object) {
  DOMSelectors[`${object}`] = document.querySelector(`${object}`);
}
function clearObjectInput(object) {
  document.getElementById(object) == "";
}
function updateObject(object) {
  document.getElementById(object).update();
}
function deleteObject(object) {
  delete DOMSelectors.object;
}
function reloadObject(object) {
  object.location.reload();
}
function createObject(object) {
  object = document.getElementById(object);
  injectObject(object);
  clearObjectInput(object);
}
console.log(DOMSelectors);
const p = "p";
createObject(p);
console.log(DOMSelectors);

// document.querySelector(blah).insertAdjacentHTML("beforeend",[theactualhtml with backticks])
//${} for variables inside string
//.value,.key
// js includes
