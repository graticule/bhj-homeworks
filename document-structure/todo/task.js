const input = document.getElementById('task__input');
const buttonAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list')

buttonAdd.addEventListener('click', e => {
    e.preventDefault();

    const text = input.value.trim();
    input.value = '';

    if (text === '') {
        return;
    }

    const newTask = document.createElement('div')
    newTask.classList.add('task');
    newTask.innerHTML = 
    `<div class="task__title">
        ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>`;

    taskList.append(newTask);
    
    newTask.querySelector('a').addEventListener('click', () => {
        taskList.removeChild(newTask);
    })
})