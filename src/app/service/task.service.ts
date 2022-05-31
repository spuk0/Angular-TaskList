import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs' //Para hacrlo asincronico como debe ser, tiene q ver con bd
import { TaskInterface } from 'src/app/tasks';

const httpOptions = { //para indicar al backend q lo q mandamos en un json
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(
    private http: HttpClient
  ) { }

  getTask (): Observable<TaskInterface[]>{ //Funcion que devuelve el array con los objetos que son cada lista.

    return this.http.get<TaskInterface[]>(this.apiUrl);
  }
  deleteTask (task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  updateTaskReminder (task: TaskInterface): Observable<TaskInterface>{ //para q impacte o se guarde el cambio en la base de datos
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }
}
