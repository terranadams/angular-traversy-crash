import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from 'src/app/interfaces/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  // We're making variables to databind with our form
  text!: string;
  day!: string;
  reminder: boolean = false; // we can set default values for databinds.
  // To databind, we must import and use the forms module.....?
  // Brackets are for input like [ngStyle], [ngClass] or making props, and parenthesis are for output, like events.
  // But with two way binding, we use both: [(ngModel)]="variableName"
  subscription: Subscription
  showAddTask!: boolean

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  onSubmit() {
    if (!this.text) alert('Please add a task.');
    else {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.onAddTask.emit(newTask)

      // console.log(newTask)
      //clear form after obtaining data
      this.text = ''
      this.day = ''
      this.reminder = false
    }
  }
}
