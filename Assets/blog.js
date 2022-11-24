function store(){
    var key = document.getElementById('Pub').value;
}
window.localStorage.setItem(key,JSON.stringify(Pub)); 
function retrieveRecords(){ //retrieves items in the localStorage
    console.log("Pub");
    var infor = document.createTextNode(Pub);
}