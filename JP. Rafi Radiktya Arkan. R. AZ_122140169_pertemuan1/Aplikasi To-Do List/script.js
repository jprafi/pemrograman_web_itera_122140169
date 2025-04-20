function sapaNama(nama) {
    return `Halo, ${nama}! Selamat datang di To-Do List!`;
}

document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = `<p class="text-green-500">${pesan}</p>`;
    }
});

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div>
                <button class="complete-btn" data-index="${index}">✓</button>
                <button class="delete-btn" data-index="${index}">✕</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

taskList.addEventListener('click', (event) => {
    const target = event.target;
    const index = target.dataset.index;

    if (target.classList.contains('complete-btn')) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    } else if (target.classList.contains('delete-btn')) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
});

renderTasks();