const DOMSelectors = {
  test: document.getElementById("test"),
};
objectCreation(".form");
objectCreation("firstName");
objectCreation("h2");

function objectInjection(object) {
  DOMSelectors.object == object;
}
function formReset(object) {
  document.getElementById(object).reset();
}
function objectRemove(object, arr) {
  arr = arr.filter((functobject) => functobject.form != { object });
}

function objectCreation(object) {
  var object = document.getElementById({ object });
  objectInjection(object);
  if (object) {
    DOMSelectors.object.addEventListener("submit"),
      function (event) {
        event.preventDefault(); //stps page refresh
        formReset(object);
        DOMSelectors.h2.forEach(
          (h2) => (h2.textContent = DOMSelectors.firstName.value)
        );
      };
  }
}
