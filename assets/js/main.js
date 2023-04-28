
//Import list generation function by calling it with the addEventListener
import {listButton,addList,listContainer} from './modules/list_items.js';
//generate a list element based on the input New List, validated by clicking the "create a new list button"
listButton.addEventListener("click",addList);
import {modifyList} from './modules/list_intercativity.js';
//use the checked and remove options on click
listContainer.addEventListener('click',modifyList,true);


//Create a new input box by clicking on the list div

