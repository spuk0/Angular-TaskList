import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { TaskInterface } from 'src/app/tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  
  @Input () task: TaskInterface = TASKS [0]; //temporalmente lo haremos asi.
  @Output () onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter();
  @Output () onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter();

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete (task: TaskInterface){
    this.onDeleteTask.emit(task); //esto se manda al componente padre a traves del Output en el onDeleteTask
  }

  onToggle (task: TaskInterface){
    this.onToggleReminder.emit(task);
  }
}
