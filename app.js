const DOMSelectors = [
  {
    test: document.getElementById("test"),
    p: document.getElementById("p"),
  },
];
function injectObject(object) {
  DOMSelectors.push({ object: document.getElementById(object) });
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
const reloadObject = (event) => {};
function createObject(object) {
  object = document.getElementById(object);
  injectObject(object);
  clearObjectInput(object);
}
console.log(DOMSelectors);
createObject("p");
console.log(DOMSelectors);
//https://www.w3schools.com/js/js_htmldom_elements.asp

//object.update,getelementbyid(object).update()

/*   object.onbeforeunload(() => {
    before the page unloads it refreshes
    object.reload();
  })''
  */

//research dom injector
