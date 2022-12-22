import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' // HttpClientModule needs to be added to the modules array in app.modules.ts
import { Task } from '../interfaces/Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { TasksComponent } from '../components/tasks/tasks.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// https://github.com/bradtraversy/angular-crash-2021

  /*
  This project can only work if you run 'npm run server' in another termal window (root directory) before running 'ng serve'.
  The first command spins up the backend api as described in https://www.npmjs.com/package/json-server which the front end draws tasks from (this was an added script to package.json line 10
  The api is powered by the npm package json-server, which turns our db.json file in the root folder into an api we can run api calls at locally to the hostname "localhost:5000/tasks"
  */

  // all these calls get ran in TasksComponent

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = "http://localhost:3000/tasks" // had to switch to port 3000 due to the AirPlay receiver in Mac OS Monterey using port 5000.

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> { // api calls return an Observable by default anyway
    // const tasks = of(TASKS) ; return tasks // This would turn our TASKS import thing into an observable, even though it's not an API call. We'll never use this.
    return this.http.get<Task[]>(this.url)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`
    return this.http.delete<Task>(url) // This deletes a task from the api, but the page still must be re-rendered to reflect the change. We get around this in the call back where the call is ran (tasks.component)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions) // we're sending data, so we want to send headers with the content type.
  }

  addTask(task: Task):Observable<Task> {
    return this.http.post<Task>(this.url, task, httpOptions) // we're submitting data, so we use httpOptions
  }


  /*
  To run api calls, import { HttpClientModule } from '@angular/common/http' in app.module.ts
  add HttpClientModule to imports array, then import into this service file ---> import { HttpClient } from '@angular/common/http'
  Then add it to the constructor ---> constructor(private http: HttpClient) { }

  Write a function to run the call:

  getTasks() {
    let url = "localhost:5000/tasks"
    return this.http.get(url)
  }

  Then in the component.ts file of where you want to execute the call, import the service and define it in the constructor(private task:TaskService)
  and then use this.taskService.getTasks().subscribe(data => console.log(data)) in the ngOnInit curleys or in another method
  */
}

