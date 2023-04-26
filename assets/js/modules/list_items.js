import function addListItems(){
	//this array will hold the list items
	let listItems = [];

	function addList(text) {
		const list = {
			text,
			id: Date.now(),
		};

		listItems.push(list);
		console.log(listItems);
	}
	//Select the form element
	const form = document.querySelector('.js-form');
	//Add a submit event listener
	form.addEventListener('submit', event => {
		//preventing page refresh on submission form
		event.preventDefault();
		//select the text input
		const input = document.querySelector('.js-list-input');

		// Get the valie of the input and remove whitespace
		const text = input.value.trim();
		if (text !== '') {
			addList(text);
			input.value = '';
			input.focus();
			}

		});
}