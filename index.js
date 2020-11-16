let popUp = document.querySelector(".new-item");
let overlay = document.querySelector(".overlay");
let bodyTag = document.querySelector("body");
let frm = document.querySelector("form");
let itemsGrid = document.querySelector(".todo-list-grid");
let errorParagraph = document.getElementById("item-error-message");
let tutorial = document.getElementById("tutorial");

//Open Add To-Do box
function openNew() {
    console.log("New Note Opened");
    popUp.style.visibility = "visible";
    popUp.style.opacity = "1";
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
}
//Close Add To-Do box
function closeNew() {
    console.log("New Note closed");
    popUp.style.visibility = "hidden";
    popUp.style.opacity = "0";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";

    errorParagraph.style.visibility = "hidden";
    errorParagraph.style.opacity = "0";
    todoInput.style.border = "none";
}

//Open Tutorial
function openTut() {
    console.log("Tutorial Page opened!");
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    tutorial.style.visibility = "visible";
    tutorial.style.opacity = "1";
}

function closeTut() {
    console.log("Tutorial Page closed!");
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    tutorial.style.visibility = "hidden";
    tutorial.style.opacity = "0";
}

/*     bodyTag.addEventListener("click", closeNew(){
    
    }); */


//Input variables

let todoInput = document.getElementById("todo-input");
let todoDue = document.getElementById("todo-due");
let todoAdd = document.querySelectorAll(".add-todo");

function addItem() {

    //Check field if empty
    if (todoInput.value.length == 0 || (todoDue.value.length == 0)) {
        console.log("Input incorrect");
        errorParagraph.style.visibility = "visible";
        errorParagraph.style.opacity = "1";
        todoInput.style.border = "1px solid red";
        return;
    }
    else {
        errorParagraph.style.visibility = "hidden";
        errorParagraph.style.opacity = "0";
        todoInput.style.border = "none";
    }

    //Create Elements and append to grid

    //Create Main Div
    let listItem = document.createElement("div");
    listItem.className = "todo-list-item";
    itemsGrid.appendChild(listItem);

    //Create content div
    let listItemContent = document.createElement("div");
    listItemContent.className = "todo-list-item-content";
    listItem.appendChild(listItemContent);

    //Create Content Column
    let listItemColumn = document.createElement("div");
    listItemColumn.className = "todo-list-item-column";
    listItemContent.appendChild(listItemColumn);

    //Create Title
    let listItemTitle = document.createElement("h3");
    listItemColumn.appendChild(listItemTitle);
    listItemTitle.innerText = todoInput.value;

    //Create Due Date
    let listItemDate = document.createElement("p");
    listItemColumn.append(listItemDate);
    listItemDate.innerText = "Due " + todoDue.value;


    //Create Content Column 2
    let listItemColumn2 = document.createElement("div");
    listItemColumn2.className = "todo-list-item-column-2";
    listItemContent.appendChild(listItemColumn2);

    //Create Check Button for Column 2
    let checkButton = document.createElement("button");
    checkButton.className = "todo-check";
    listItemColumn2.appendChild(checkButton);
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.addEventListener("click", checkItem);

    //Create Delete Button for Column 2
    let delButton = document.createElement("button");
    delButton.className = "todo-delete";
    listItemColumn2.appendChild(delButton);
    delButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    delButton.addEventListener("click", deleteItem);


    //Delete Function
    function deleteItem(e) {
        console.log("Item removed");
        listItem.remove();
    }

    //Check function
    function checkItem() {
        console.log("Item checked!");
        listItem.style.opacity = "0.4";
        listItem.style.backgroundColor = "rgb(247, 247, 247)";
    }


    //Reset the Input 
    //? KEEP AT BOTTOM
    frm.reset();
}




//Prevent Refresh
function handleForm(event) { 
    event.preventDefault(); 
}
frm.addEventListener('submit', handleForm);