import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { TaskInterface } from 'src/app/tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //inicializamos una variable con la que usaremos la base de datos de la sig. manera:
  arrayTasks: TaskInterface[] = TASKS; //Ojo que es un array donde cada elemento es un objeto.

  constructor() { }

  ngOnInit(): void {
  }

}
