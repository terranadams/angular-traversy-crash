import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() click = new EventEmitter() // this is how to make custom events for our components, we import these two modules to create them.
  // In this case, I named my custom component "click", which gets ran just like the default (click) attribute in a <button> tag to call methods. 

  onClick() {
    this.click.emit()
  }
}
