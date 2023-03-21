/*
* File: app.js
* Author: Szávai Balázs
* Copyright: 2021, Szávai Balázs
* Group: Szoft I-1/E
* Date: 2023-03-21
* Github: https://github.com/szavaibali/
* Licenc: GNU GPL
*/
const doc = {
    tbody: null
};
const state = {
    todos: []
}
window.addEventListener('load', () => {
    init();
    getTodos();
    
});
function init() {
    doc.tbody = document.querySelector('#tbody');
}

function getTodos() {
    let host = 'http://localhost:8000/';
    let endpoint = 'todos';
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.todos = result;
        render();
    });
}
function render() {
    let rows = '';
    state.todos.forEach(todo => {
        console.log(todo.name);
        rows += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>${todo.ready}</td>
            </tr>
        
        `;
    });
    doc.tbody.innerHTML = rows;
}