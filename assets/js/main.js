
//Import list generation function by calling it with the addEventListener
import {listButton,addList,listContainer} from './modules/list_items.js';
listButton.addEventListener("click",addList);
//Import the remove list function
import {removeList} from './modules/list_intercativity.js';
listContainer.addEventListener('click',removeList);
//Import a new input to add task at a list
//import {listType,addTaskInput} from './modules/task_implementation.js';
//listType.addEventListener('click',addTaskInput);


