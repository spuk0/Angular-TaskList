import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs' //Para hacrlo asincronico como debe ser, tiene q ver con bd
import {TASKS} from '../mock-tasks';
import { TaskInterface } from 'src/app/tasks';

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
}
