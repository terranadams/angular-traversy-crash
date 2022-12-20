import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task; // must remember to use the ! after the name when creating component attributes(props)
  faTimes = faTimes // we have to define these after importing

  onDelete() {
    console.log("goodbye world")
  }
}
