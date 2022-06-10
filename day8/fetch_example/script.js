

const url = 'https://jsonplaceholder.typicode.com/todos/21';

async function fetchTodos() {
    //do the fetch
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });


    if (response.status >= 200 && response.status<300) {
        const json = await response.json();
        return json;
    } else {
        throw new Error('something went wrong');
    }
}

function renderTodos(todos) {
    let output = '<ol>';
    todos.forEach((todo) => {
        output += `<li>
        id:${todo.id} - title: ${todo.title} - completed: ${todo.completed} - userId: ${todo.userId}
        </li>`
    })
    output += '</ol>';

    document.body.innerHTML = output;
}

function renderTodo(todo) {
    let output = '<ol>';
    output += `<li>
        id:${todo.id} - title: ${todo.title} - completed: ${todo.completed} - userId: ${todo.userId}
        </li>`
    output += '</ol>';

    document.body.innerHTML = output;
}

async function saveTodo(todo) {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const response = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.status >= 200 && response.status<300) { //success codes are in the 200s
        const json = await response.json();
        return json;
    } else {
        throw new Error('something went wrong');
    }
}

// async function start() {
//     try {
//         const todos = await fetchTodos();
//         console.log(todos);
//     } catch(err) {
//         console.log(err);
//     }
// }

async function start() {
    try {
        const response = await saveTodo({
            title: 'Teach the class',
            completed: false,
            userId: 2
        });

        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

start();