import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Walk the dog");
myTodoList.addTask("Study for exams");

myTodoList.markTaskComplete(2); 

myTodoList.listTasks();
