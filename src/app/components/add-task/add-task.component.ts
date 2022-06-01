import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs';
import { TaskInterface } from 'src/app/tasks';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
      this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }
  
  onSubmit (){
    if (this.text.length === 0){
      alert("Please add some text in the task");
      return
    }
    //const {text,day,reminder} = this
   // const newTask = {text,day,reminder}
  /* Otraforma de hacerlo*/
  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
  }

    this.onAddTask.emit(newTask);


  }


  
}
