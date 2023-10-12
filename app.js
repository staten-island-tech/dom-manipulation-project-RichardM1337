const DOMSelectors{
}

function objectCreation(object){

}
function objectInjection(object){
    DOMSelectors.push(object)
}
function formReset(object){
    document.getElementById({object}).reset();
}
function objectRemove(object,arr){
    arr=arr.filter(functobject => functobject.form != 'object')
}