function addTodo() {

    const todoInput = document.getElementsByClassName("todo-text-box")[0];
    let removeText = document.getElementsByClassName("unimportant-text")[0];

    if (todoInput.value !== '') {
        removeText.innerText = '';

        const createDiv = document.createElement("div");
        createDiv.classList.add("todo-item-container");
        document.getElementsByClassName("todo-list-container")[0].appendChild(createDiv);
        const todoText = document.createElement("p");
        todoText.innerText = todoInput.value;
        todoText.classList.add("todo-styling");
        createDiv.appendChild(todoText);
        removeText.style.margin = '.5em 0em 0em 0em'
        todoText.style.fontWeight = 'bold';

        if (todoInput.value.length > 50) {
            todoText.style.overflowX = 'scroll';
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add("checkbox-styling");
        todoText.prepend(checkbox);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked === true) {
                todoText.classList.add("todo-styling-checked");
                createDiv.classList.add("todo-item-container-checked");
            } else {
                todoText.classList.remove("todo-styling-checked");
                createDiv.classList.remove("todo-item-container-checked");
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add("delete-button");
        createDiv.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            createDiv.remove();
        });

        todoInput.value = '';
    }
}


function addHabit() {

    const habitInput = document.getElementsByClassName("habit-text-box")[0];
    let removeText = document.getElementsByClassName("unimportant-text")[1];

    if (habitInput.value !== '') {
        removeText.innerText = '';

        const createDiv = document.createElement("div");
        createDiv.classList.add("habit-item-container");
        document.getElementsByClassName("habit-list-container")[0].appendChild(createDiv);
        const habitText = document.createElement("p");
        habitText.innerText = habitInput.value;
        habitText.classList.add("habit-styling");
        createDiv.appendChild(habitText);
        removeText.style.margin = '.5em 0em 0em 0em'

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add("delete-button");
        createDiv.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            createDiv.remove();
        });

        const month = document.getElementById("month-select").value;
        const year = document.getElementById("year-select").value;
        const createCal = document.createElement("p");
        createCal.innerText = month + " " + year;
        createCal.classList.add("month-styling");
        document.getElementsByClassName("habit-list-container")[0].appendChild(createCal);
        createDiv.appendChild(createCal);

        habitInput.value = '';

        let dates = ["Su", "Mo", "Tu", "Wed", "Th", "Fri", "Sat"];
        const calenderDiv = document.createElement("div");
        calenderDiv.classList.add("calender-styling");
        createDiv.appendChild(calenderDiv);


        for (i = 0; i <= 6; i += 1) {

            const createDates = document.createElement("p");
            createDates.classList.add("date-styling");
            createDates.innerText = dates[i];
            calenderDiv.appendChild(createDates);

        }

        for (x = 1; x <= 31; x += 1) {

            const createDateNum = document.createElement("button");
            createDateNum.innerText = x;
            createDateNum.classList.add("datenum-styling");
            calenderDiv.appendChild(createDateNum);

            createDateNum.addEventListener("click", () => {
                createDateNum.classList.toggle("datenum-clicked-styling");
            });

        }

    }
}