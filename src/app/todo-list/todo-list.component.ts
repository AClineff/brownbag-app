import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: string[]
  newTodo: string
  service: TodosService

  constructor(service: TodosService) {
    this.todos = []
    this.service = service
  }

  ngOnInit() {
    this.service.getTodos().then(todos => {
      this.todos = todos
    }).catch(e => {
      console.error(e)
    })
  }

  addTodo() {
    this.todos.push(this.newTodo)
    this.newTodo = ''
  }

}
