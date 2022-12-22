import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Angular Task Tracker Crash Course';
  showAddTask!: boolean
  subscription: Subscription

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
    // we're setting the value in this component to whatever the value is in the service after it got changed.
  
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
    // we could've just updated the value within this method,
    // but we want other components to see the change as well, which is why we're using a service.
    // so we request to listen to it in the constructor of this file
  }
}
