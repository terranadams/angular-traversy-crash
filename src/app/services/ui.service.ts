import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  // This is called a Subject. Think of this file as a giant react hook, holding variables with data, and methods for changing that data
  // and then that data gets shared to other components as an observable, so it stays up to date dynamically

  private showAddTask: boolean = false
  private subject = new Subject<any>()


  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask // we're changing the boolean to equal the opposite, toggling
    this.subject.next(this.showAddTask) // we pass the value into this next() method, which is what gets
    // passed along as an observable when the onToggle() method below gets subscribed to by other components.
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
// we want to call toggleAddTask() whenever the button gets clicked, and then when we want to do something when that happens, we subscribe to onToggle() since it's an observable.

