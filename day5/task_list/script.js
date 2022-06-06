class Task {
    constructor (taskName) {
        this.taskName = taskName
    }
}

class UserInterface {
    constructor() {
        this.form = document.getElementById('form');
        this.taskName = document.getElementById('task-name-input');
        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const task = new Task(this.taskName.value);

            this.tasks.push(task);
            localStorage.setItem('taskArray',this.tasks); //stores "tasks" to local storage?
            this.renderTableBody();
            this.taskName.value = '';
        });

        this.tasks = [];
        this.renderTableBody();
    }


    renderTableBody() {
        this.tableBody.innerHTML = ''; //clear the table body

        for (let i=0; i<this.tasks.length; i++) {
            const task = this.tasks[i];

            const tableRow = this.generateRow(task);
            this.tableBody.appendChild(tableRow);
        }
    }

    generateRow(task) {
        const tableRow = document.createElement('tr');

        const cellTaskName = document.createElement('td')
        const cellCompleteButton = document.createElement('td');
        const cellActionsButton = document.createElement('td');

        cellTaskName.innerHTML = task.taskName;

        const completeButton = this.generateCompleteCheckbox(task);
        const removeButton = this.generateRemoveButton(task);

        cellCompleteButton.appendChild(completeButton);
        cellActionsButton.appendChild(removeButton);

        tableRow.appendChild(cellTaskName);
        tableRow.appendChild(cellCompleteButton);
        tableRow.appendChild(cellActionsButton);

        return tableRow;
    }

    generateRemoveButton(task) {
        const removeButton = document.createElement('button');

        removeButton.innerHTML = 'x';
        removeButton.setAttribute('class', 'btn btn-sm btn-primary');

        removeButton.addEventListener('click', () => {
            this.tasks = this.tasks.filter((t) => {
                return t.taskName != task.taskName;
            });
    
            this.renderTableBody();
        });
        return removeButton;
    }

    generateCompleteCheckbox(task) {
        const input1 = document.createElement('input');
        input1.setAttribute('type', 'checkbox');
        return input1;
    }
}

//let previousTasks = localStorage.getItem('taskArray');
//I'm having trouble saving the array of tasks to local storage

new UserInterface();
