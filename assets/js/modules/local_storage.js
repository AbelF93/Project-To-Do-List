import { listContainer } from "./list_items";

export function storeData() {    
    // Get all the todo items   
     const task = listContainer.getElementsByClassName('list__type');      
   // Create an array to store the task     
   const taskItems = [];     
    // Loop through the todo items and add them to the array     
   task.forEach(todo => {         
   taskItems.push({            
    text: todo.querySelector('li').textContent,           
     completed: todo.classList.contains('checked')         }); 
       }); 
        // Store the task array in the local storage   
    localStorage.setItem('task', JSON.stringify(taskItems)); }

export function showData(){
    listContainer.innerHTML = localStorage.getItem("task");
}
export function loadSata() {
    // Get the todos array from the local storage
    const task = JSON.parse(localStorage.getItem('task'));

    // Return if the todos array is empty
    if (!task) {
        return;
    }
}