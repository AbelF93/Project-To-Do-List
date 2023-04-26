//Exporting the constance used for the addEventListener
export const listButton = document.getElementById('listAdd');

//Constances used by the addList function
const inputBoxList = document.getElementById('input-box-list');
	const listContainer = document.getElementById('list-container');

//The functon first check if the user insert a value
	export function addList(){
		if(inputBoxList.value === ''){
			alert("Please, write something.");
		}
//If it is not null, it creates a list element with the name of this value
		else{
			let li = document.createElement('li');
			li.innerHTML = inputBoxList.value;
			listContainer.appendChild(li);
		}
//after the condition is validate, the input box is cleared
		inputBoxList.value = '';
	}
	
