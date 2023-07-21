let container = document.getElementById("list");


function addElement(){
    if(document.getElementById("input-field").value=== ""){
        alert("Type in a task first to add it to the list");
    }
    else{
    let ele = document.createElement("li");
    let inp = document.createElement("input");
    inp.id = "newInputField";
    inp.value = document.getElementById("input-field").value;
    inp.disabled=true;
    let checkBtn = document.createElement("span");
    checkBtn.innerHTML = "check";
    let editBtn = document.createElement("span");
    editBtn.innerHTML = "edit_note";
    let delBtn = document.createElement("span");
    delBtn.innerHTML = "delete";
    checkBtn.className = "material-symbols-outlined checkBtn";
    editBtn.className = "material-symbols-outlined editBtn";
    delBtn.className= "material-symbols-outlined delBtn";
    ele.appendChild(inp);
    ele.appendChild(checkBtn);
    ele.appendChild(editBtn);
    ele.appendChild(delBtn);
    container.appendChild(ele);
    document.getElementById("input-field").value= "";
    document.getElementById("input-field").placeholder = "Add Task...";

    delBtn.onclick = function() {
      ele.style.display = "none";
    }

    checkBtn.onclick = function() {
       if(inp.style.textDecoration === "line-through" &&  inp.disabled === true)inp.style.textDecoration = "none";
       else  if(inp.disabled === true)inp.style.textDecoration = "line-through";
    }

    editBtn.onclick = function() {
        if(inp.disabled === true){
        if(inp.style.textDecoration === "line-through"){
            inp.style.textDecoration = "none";
        }
        inp.disabled = false;
        }
        else inp.disabled = true;
    }
    }
}

function delText(){
     document.getElementById("input-field").value = "";
}


