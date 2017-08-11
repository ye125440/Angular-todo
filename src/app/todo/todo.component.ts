import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  // 这是一个todo组件 我需要什么:todo数组、todo描述
  todos: Todo[] = [];
  desc = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  addTodo() {
    // this.todos.push({id: '1', desc: this.desc, completed: false});
    // this.desc = '';
    this.todoService.addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      });
  }

  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService.toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0, i), t, ...this.todos.slice(i + 1)
        ]; // 改变第 i 个对象的 completed 属性后更新
      });
  }

  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService.deleteTodoById(todo.id)
      .then(() => {
        this.todos = [
          ...this.todos.slice(0, i), ...this.todos.slice(i + 1)
        ];
      });
  }

  getTodos(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = [...todos]);
  }
}
