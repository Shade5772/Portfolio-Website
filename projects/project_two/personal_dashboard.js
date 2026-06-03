function addTodo() {

    const todoInput = document.getElementsByClassName("todo-text-box")[0];
    let removeText = document.getElementsByClassName("unimportant-text")[0];

    if (todoInput.value !== '') {
        removeText.innerText = '';

        const todoText = document.createElement("p");
        todoText.innerText = todoInput.value;
        todoText.classList.add("habit-styling");
        document.getElementsByClassName("list-container")[0].appendChild(todoText);
        removeText.style.margin = '.5em 0em 0em 0em'

        if (todoInput.value.length > 50) {
            todoText.style.overflowX = 'scroll';
        }

        console.log(todoInput.value.length);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add("checkbox-styling");
        todoText.prepend(checkbox);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add("delete-button");
        todoText.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            todoText.remove();
        });

        todoInput.value = '';
    }
}


function addHabit() {

    const habitInput = document.getElementsByClassName("habit-text-box")[0];
    let removeText = document.getElementsByClassName("unimportant-text")[1];

    if (habitInput.value !== '') {
        removeText.innerText = '';
        const habitText = document.createElement("p");
        habitText.innerText = habitInput.value;
        habitText.classList.add("habit-styling");
        document.getElementsByClassName("list-container")[1].appendChild(habitText);
        removeText.style.margin = '.5em 0em 0em 0em'

        habitInput.value = '';
    }
}