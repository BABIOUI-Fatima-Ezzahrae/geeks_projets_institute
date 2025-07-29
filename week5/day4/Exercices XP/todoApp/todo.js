export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = {
      id: this.tasks.length + 1,
      description,
      completed: false
    };
    this.tasks.push(task);
    console.log(`Added task: "${description}"`);
  }

  markTaskComplete(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Marked task ${id} as complete.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  listTasks() {
    console.log("\nTodo List:");
    this.tasks.forEach(task => {
      const status = task.completed ? "[✓]" : "[ ]";
      console.log(`${status} (${task.id}) ${task.description}`);
    });
  }
}
