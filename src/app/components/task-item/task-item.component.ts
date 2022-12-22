import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task; // must remember to use the ! after the name when creating component attributes(props)
  faTimes = faTimes // we have to define these after importing them
  @Output() onDeleteTask = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  onClick() {
    // console.log(this.task)
    this.onDeleteTask.emit(this.task)
  } // we want our service functionality to stay in just the parent component of this component (tasks.component)...
  // so we're creating an event that gets passed up to the parent component so the service can be used when events trigger here.

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
  }
}
