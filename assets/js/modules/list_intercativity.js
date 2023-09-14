

//this function permits to delete a list
export	function modifyList(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
//storeData();
}
        else if(e.target.tagName === 'SPAN'){
                 e.target.parentElement.remove();
                // storeData();
        }
		};
