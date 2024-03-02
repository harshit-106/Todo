import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
 @Input() todo!:Todo;
 @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
 @Output() tocheckboxclick:EventEmitter<Todo>=new EventEmitter();

 onClick(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("clicked");
  
  
 }
 oncheckboxclick(todo){
this.tocheckboxclick.emit(todo);
 }
}
