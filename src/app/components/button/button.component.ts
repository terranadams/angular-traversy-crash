import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // If you are using the latest version of ts then make sure to declare your variables in the constructor otherwise it will throw an error.
  // You can also use an ! sign after the variables. For example, @Input task!: Task;
  @Input() text!: string;
  @Input() color!: string;
}
