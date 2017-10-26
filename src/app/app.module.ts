import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { MatListModule } from '@angular/material'
import { MatButtonModule } from '@angular/material'
import { MatInputModule } from '@angular/material';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosService} from './todo-list/todos.service'


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
