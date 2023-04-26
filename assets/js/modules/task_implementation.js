//add the input element to a list
export const listType = document.querySelectorAll('li');

export function addTaskInput(e){
        if(e.target.classList.contains('list__type')){
        let tasklist = document.createElement('ul');
        listType.appendChild(tasklist);
        tasklist.setAttribute('class','task-container');
        tasklist.innerHTML += `<div class="row">
                                  <input type="input" id="input-box-task" placeholder="New task">
                              </div>`;
         let div = document.createElement('div');
         div.setAttribute('class','display__content');
         div.innerText = "+";
         tasklist.appendChild(div);
                            }
                   };