import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todoList: string[]

  constructor() {
    this.todoList = [];
    this.todoList.push('Do Some Laundry')
    this.todoList.push('Mow the yard')
    this.todoList.push('Uninstall RAD')
  }

  getTodos(): Promise<string[]> {
    // DB call
    return Promise.resolve(this.todoList)
  }

}
