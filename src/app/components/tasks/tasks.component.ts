import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks() // remember to use the 'this' keyword with classes
  }

  tasks: Task[] = []
}
