import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    // console.log(task)
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  } // the call is made without this callback func, but this callback func updates the UI with the proper data

  toggleReminder(task: Task) {
    // console.log(task.reminder)
    task.reminder = !task.reminder // just modifying the task before sending it to update the API
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    // console.log(task)
    this.taskService.addTask(task).subscribe(task => this.tasks.push(task))
  }

}
