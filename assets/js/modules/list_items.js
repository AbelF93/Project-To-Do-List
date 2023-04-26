export const listButton = document.getElementById('listAdd');
	const inputBoxList = document.getElementById('input-box-list');
	const listContainer = document.getElementById('list-container');
	
	export function addList(){
		if(inputBoxList.value === ''){
			alert("Please, write something.");
		}
		else{
			let li = document.createElement('li');
			li.innerHTML = inputBoxList.value;
			listContainer.appendChild(li);
		}
	}
	
