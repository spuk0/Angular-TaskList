import { Component, OnInit, Input } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { TaskInterface } from 'src/app/tasks';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  
  @Input () task: TaskInterface = TASKS [0]; //temporalmente lo haremos asi.
  faCoffee = faCoffee;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
