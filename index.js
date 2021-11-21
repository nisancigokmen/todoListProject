/*todo list button & input value */

const addBtn = document.querySelector(".addTodoBtn");
const addTodo = document.querySelector(".todoList");
const addUl = document.querySelector(".list-group");


const clearBtn = document.querySelector(".clearTodoBtn");
const newTodo = document.querySelector(".comeTodo");

/*all th event listeners */
eventListeners();

function eventListeners() {

    addBtn.addEventListener("click", addTodos);
    clearBtn.addEventListener("click", deleteTodo);



}

function deleteTodo(e) {

    if (confirm("Are you sure you want to delete all todos?")) {

        listItem.innerHTML = "";



    }



}


/*no space the trim :=)  */

function addTodos(e) {
    const newTodo = addTodo.value.trim();

    /*alert message  */








    /*UI ADD TODO */
    addTodoToUı(newTodo);

    e.preventDefault(e)
}



function addTodoToUı(newTodo) {

    /*add the listItem */

    /* <li class="list-group-item">   <a href="#" class="delete-item"> <i class="fa-remove"></i></a> </li>  */

    const listItem = document.createElement("li");
    listItem.style.fontSize = "21px";
    listItem.style.color = "black";
    listItem.style.marginBottom = "0.55em";


    /*add the link  */
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = " <i class=`fa-remove`></i>"
    listItem.className = "fa-remove";


    /*add the deleteIcon */

    /*  <img src="https://img.icons8.com/material-outlined/28/000000/delete-sign.png" class = "deleteIcon"/>*/

    const deleteİcon = document.createElement("img");
    deleteİcon.src = ("https://img.icons8.com/material-outlined/28/000000/delete-sign.png");
    deleteİcon.style.float = "right";
    deleteİcon.className = "deleteIcon"
    deleteİcon.style.marginRight = "1em";


    /*add text node */
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    listItem.appendChild(deleteİcon);

    /*todo list in the listItem */
    addUl.appendChild(listItem);

    /*input clear before value... */
    addTodo.value = "";

}