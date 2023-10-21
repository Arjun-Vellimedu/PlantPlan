const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '') {
        alert("You must write something.");
    }
    else {
        let li = document.createElement("li"); /* create html element with tagname li */
        li.innerHTML = inputBox.value; /* adding text from inputBox and adding to list */
        listContainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dataStorage();
}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
 }, false);

 function dataStorage(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

function data(){
    listContainer.innerHTML = localStorage.getItem("data");
}
data();