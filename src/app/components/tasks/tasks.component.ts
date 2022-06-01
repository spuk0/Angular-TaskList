import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import { TaskInterface } from 'src/app/tasks';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //inicializamos una variable con la que usaremos la base de datos de la sig. manera:
  arrayTasks: TaskInterface[] = []; //Ojo que es un array donde cada elemento es un objeto.
  //Inicializamos el servicio en el constructor
  constructor(
    private taskService: TaskService
  ) { }
  //Cuando se monte el componente se ejecuta esto:
  ngOnInit(): void {
    this.taskService.getTask().subscribe((arrayTasks)=>{
      this.arrayTasks = arrayTasks;
    }); //Aca le doy valor a lo inicializado. Investigar metodo subscribe de los observables.
  }
  deleteTask(task: TaskInterface){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.arrayTasks = this.arrayTasks.filter(t => t.id !== task.id)
    })
  }

  toggleReminder(task: TaskInterface){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: TaskInterface){
    this.taskService.addTask(task).subscribe((task)=>{
      this.arrayTasks.push(task);
    })
  }
}
