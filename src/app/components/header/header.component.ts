import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Mi lista de tareas: ';
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask = () => {
    alert("Se ejecuto el boton add-task");
  }
}
