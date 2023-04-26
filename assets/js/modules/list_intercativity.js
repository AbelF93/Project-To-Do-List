
//this function permits to delete a list
export	function modifyList(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
}
        else if(e.target.tagName === "SPAN"){
                 e.target.parentElement.remove();
        }
		};



/*export	function addTask(e){
              
            if(e.target.className === "list__type"){
              let tasklist = document.createElement('ul');
              listType.appendChild(tasklist);
              tasklist.setAttribute('class','task-container');
              tasklist.innerHTML += `<div class="row">
                                        <input type="input" id="input-box-task" placeholder="New task">
                                    </div>`;
              
              let inputBoxTask = document.getElementById('input-box-task');
                if(inputBoxTask.value === ''){
                    alert("Please, write something.");
                }
                else{
                    let taskElement = document.createElement('li');
                    taskElement.setAttribute('class','task');
                    taskElement.innerHTML = inputBoxList.value;
                    listContainer.appendChild(li);
                    let span = document.createElement('span');
                    span.innerText = "\u00d7";
                    li.appendChild(span);
                }
            }
            };*/