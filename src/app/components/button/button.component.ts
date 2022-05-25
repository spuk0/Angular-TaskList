import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input () text: string = '';
  @Input () color: string = '';
  @Output () btnClick = new EventEmitter(); //Instanciamos un btnClick de clase EventEmitter.
  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    //alert(this.text);
    this.btnClick.emit(); //Emite o manda una senial para que podamos usarla en otro componente.
  }

}
