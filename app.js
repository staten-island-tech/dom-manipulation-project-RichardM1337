const DOMSelectors = [
  {
    test: document.getElementById("test"),
    p: document.getElementsByTagName("p"),
  },
];
function injectObject(object) {
  DOMSelectors.push({ object: document.getElementById(object) });
}
function clearObjectInput(object) {
  document.getElementById(object).value = "";
}
function deleteObject(object) {
  delete DOMSelectors.object;
}
function createObject() {
  function $(object) {
    // cashsign used to replicate jQuery format
    this.object = document.getElementById(object);
    injectObject(object);
    clearObjectInput(object);
  }
}

//https://www.w3schools.com/js/js_htmldom_elements.asp
