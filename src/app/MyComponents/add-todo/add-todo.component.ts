import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
title!:string;
desc!:string;
@Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
onSubmit(){
const todo={
  sno:3,
  title:this.title,
  desc:this.desc,
  active:true
}
this.todoAdd.emit(todo);
}
}
