// Initialiser les tâches
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Ajoute une tâche
function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskCategory = document.getElementById('taskCategory').value;

    if (!taskName) return alert('Veuillez entrer une tâche');
    
    const task = {
        id: Date.now().toString(),
        name: taskName,
        date: taskDate,
        category: taskCategory,
        completed: false
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
// Supprime une tâche
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
// Marque une tâche comme terminée
function toggleTask(id) {
    tasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
// Mise à jour du compteur de tâches restantes
function updateCounter() {
    const remainingTasks = tasks.filter(task => !task.completed).length;
    document.getElementById('taskCounter').innerText = `${remainingTasks} tâche(s) restante(s)`;
}