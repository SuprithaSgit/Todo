const todoContainer = document.querySelector('.todo-container');
const submitBtn = document.querySelector('.sub-btn');
const input = document.querySelector('.f-input');
const todosContainer = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const todoItem = document.querySelector('.todo-item');
const searchForm = document.querySelector('.serach-input');

const generateTodos = (todo) => {
	const text = `
    <li class="todo-item">
    <span class="todo-text"> ${todo} </span>
    <i class="fa-solid fa-trash-arrow-up delete"></i>
    </li>
    `;
	todosContainer.innerHTML += text;
};
// add todo
// todoForm.addEventListener('submit', (e) => {
// 	e.preventDefault(); // to prevent page from refreshing after clicking on button

// 	// create todo
// 	const todo = input.value.trim();

// 	// generate a todo only if there is value in input
// 	if (todo) {
// 		generateTodos(todo);
// 		// clear form
// 		todoForm.reset();
// 	}
// });
submitBtn.addEventListener('click', (e) => {
	e.preventDefault(); // to prevent page from refreshing after clicking on button
	// create todo
	const todo = input.value.trim();
	// generate a todo only if there is value in input
	if (todo) {
		generateTodos(todo);
		// clear form
		todoForm.reset();
	}
});

// delete todo

todoContainer.addEventListener('click', (e) => {
	// if the clicked target contains delete remove it along with parent element
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

// to strike completed
todoContainer.addEventListener('dblclick', (e) => {
	console.log('double click');
	if (e.target.classList.contains('todo-item')) {
		e.target.classList.toggle('completed');
	}
});

// todos filter
const filterTodos = (query) => {
	// convert list to array
	const todoItems = Array.from(todosContainer.children);
	console.log(todoItems);
	// iterate to all li array ele to find match
	todoItems.forEach((todo) => {
		const text = todo.textContent;
		if (text.toLocaleLowerCase().includes(query)) todo.style.display = 'flex';
		else todo.style.display = 'none';
	});
};

// search items
searchForm.addEventListener('keyup', (e) => {
	const query = e.target.value.trim().toLowerCase();
	filterTodos(query);
});
