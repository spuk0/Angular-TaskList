import { Component, OnInit } from '@angular/core';
import {UiService} from 'src/app/service/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Mi lista de tareas: ';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value) //Para q funcione el click
   }

  ngOnInit(): void {
  }

  toggleAddTask = () => {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route; //Si la ruta del router o path es igual a route, entonces devuelve verdadero
  }
}
