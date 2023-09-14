



//Exporting the constance used for the addEventListener
export const listButton = document.getElementById('listAdd');

//Constances used by the addList function
const inputBoxList = document.getElementById('input-box-list');
export	const listContainer = document.getElementById('list-container');

//The functon first check if the user insert a value
	export function addList(){
		if(inputBoxList.value === ''){
			alert("Please, write something.");
		}
//If it is not null, it creates a list element with the name of this value
		else{
			//let taskList = document.createElement('div');
			let list = document.createElement('li');
			let listDeleteBtn = document.createElement('span');
			let taskDisplayBtn = document.createElement('button')
			let taskContainer = document.createElement('div');
			const taskAdd = document.createElement('input');
			
       		taskAdd.setAttribute('type','input');
       		taskAdd.setAttribute('class','task-container__task-input');
        	taskAdd.setAttribute('placeholder','New task');
        
			list.setAttribute('class','list-type__task-list');
			taskContainer.setAttribute('class','list-type__task-container');
			list.innerHTML = inputBoxList.value;
			listDeleteBtn.setAttribute('class','button delete-button');	
			listDeleteBtn.innerText = "\u00d7";
			taskDisplayBtn.setAttribute('class','button display-button');			
			taskDisplayBtn.innerText ="+";

			taskContainer.appendChild(taskAdd);
			list.appendChild(taskDisplayBtn);
			list.appendChild(listDeleteBtn);
			list.appendChild(taskContainer);
			listContainer.appendChild(list);
			
		}
//after the condition is validate, the input box is cleared
		inputBoxList.value = '';
			}

	
