const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '') {
        alert("You must write something."); /* making sure user enters something before trying to add */
    }
    else {
        let li = document.createElement("li"); /* create html element with tagname li */
        li.innerHTML = inputBox.value; /* adding text from inputBox and adding to list */
        listContainer.appendChild(li); 
        let span = document.createElement("span"); /* creating a delete button with symbol spam */
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dataStorage(); /* ensures program data is retained when navigating away from page */
}

/* checks if clicked symbol was the delete or check button */
listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
 }, false);

 /* saves current state of data */
 function dataStorage(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

/* loads current data from local storage with the function call each time to-do is accessed */
function data(){
    listContainer.innerHTML = localStorage.getItem("data");
}
data();